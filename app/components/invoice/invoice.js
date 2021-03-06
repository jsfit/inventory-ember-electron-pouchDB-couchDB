import Component from '@glimmer/component';
import EmberObject,  { computed, set, action, get } from '@ember/object';
import $ from 'jquery';
import { tracked } from "@glimmer/tracking";
import { inject as service } from '@ember/service';

export default class InvoiceInvoiceComponent extends Component {
  @service('toast') notifications;
  @service() store;

  @tracked  invoice_details = [];
  @tracked  defaultSelectProduct = null;
    constructor() {
        super(...arguments);
        $(document).ready(function() {
          $('#supplierSelect').select2();
          $('#buyerSelect').select2();
         });
         set(this, "defaultSelectProduct",  this.args.products.length && this.args.products[0] )
        if(this.args.products.get('firstObject.id')){
          set(this, "invoice_details", [EmberObject.create({
            "product": this.args.products.get('firstObject'),
            "qty": 1,
            "retail_price": this.args.products.get('firstObject.retail_price')
          })]);
        }

        set(this, 'supplier', this.args.supplier);

        let selectedSupplier = get(this, 'supplier').filterBy("id", 1);
        if(selectedSupplier.get("length")){
          set(this, 'selectedSupplier', selectedSupplier[0]);
        }else {
          set(this, 'selectedSupplier', get(this, 'supplier.firstObject'));
        }


        set(this, 'buyer', this.args.buyer);
        let selectedBuyer = get(this, 'buyer').filterBy("id", 1);
        if(selectedBuyer.get("length")){
          set(this, 'selectedBuyer', selectedBuyer[0]);
        }else {
          set(this, 'selectedBuyer', get(this, 'buyer.firstObject'));
        }
 
    }


    @computed('invoice_details')
    get productSelect() {
      this.invoice_details.forEach((d, i)=> $(`#productSelect-${i}`).select2());
    }

    @action
    async submitInvoice() {
      let supplier = this.selectedSupplier;
      let buyer = this.selectedBuyer;
      if(supplier.id && buyer.id){
        let details = this.invoice_details;
        if(details.length){
          let invoice = await this.store.createRecord("invoice", {
            "date":  new Date(),
            "buyer": buyer,
            "supplier":supplier
          });
          let invoice_details = await invoice.detail;

          await details.forEach (async detail => {
           let d = await this.store.createRecord("invoice-detail", detail);
           let product =  await this.store.peekRecord('product', d.get("product.id"));;
           product.set("stock", product.get("stock") - d.qty);
           await invoice_details.pushObject(d);
           d.save();
           product.save();

          });
          
          invoice.save();
          this.notifications.success('Invoice Created Successfully', 'Invoice Genrated');
          this.invoice_details = [];


        }else {
          this.notifications.error('No product selected', 'Error');
        }
        
      }else {
        this.notifications.error('Select both supplier and buyer', 'Error');
      }

    }

    @action
    selectSupplier(id) {
      set(this, "selectedSupplier",  get(this, 'supplier').filterBy("id", id)[0]);
    }

    @action
    selectBuyer(id) {
      set(this, "selectedBuyer",  get(this, 'buyer').filterBy("id", id)[0]);
      
    }

    @action
    addRemoveDetails(check) {
      if(check){
        if(this.args.products.get('firstObject.id')){
          this.invoice_details.pushObject(EmberObject.create({
            "product": this.args.products.get('firstObject'),
            "qty": 1,
            "retail_price": this.args.products.get('firstObject.retail_price')
          }));
        }
      }else {
        this.invoice_details.popObject();
      }

    
        $('html,body').animate({scrollTop: $(".second").offset().top}, 'slow');
    }

    @action
    removeDetail(index) {
       this.invoice_details.removeAt(index);
       $('html,body').animate({scrollTop: $(".second").offset().top}, 'slow');
    }
    
}
