import Component from '@glimmer/component';
import EmberObject,  { computed, set, action, get } from '@ember/object';
import $ from 'jquery';
import { tracked } from "@glimmer/tracking";

export default class InvoiceInvoiceComponent extends Component {
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
            "product": this.args.products.get('firstObject.id'),
            "qty": 1,
            "retail_price": this.args.products.get('firstObject.retail_price')
          })]);
        }
        set(this, 'supplier', this.args.customer.filterBy("type", "supplier"));
        let selectedSupplier = get(this, 'supplier').filterBy("selected", true);
        if(selectedSupplier.get("length")){
          set(this, 'selectedSupplier', selectedSupplier[0]);
        }else {
          set(this, 'selectedSupplier', get(this, 'supplier')[0]);
        }


        set(this, 'buyer', this.args.customer.filterBy("type", "buyer"));
        let selectedBuyer = get(this, 'buyer').filterBy("selected", true);
        if(selectedBuyer.get("length")){
          set(this, 'selectedBuyer', selectedBuyer[0]);
        }else {
          set(this, 'selectedBuyer', get(this, 'buyer')[0]);
        }
 
    }


    @computed('invoice_details')
    get productSelect() {
      this.invoice_details.forEach((d, i)=> $(`#productSelect-${i}`).select2());
    }

    @action
    submit() {
      set(this, "firstName", "yes")
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
    selectProduct(id) {
      set(this, "product",  get(this, 'products').filterBy("id", id)[0]);
    }

    @action
    addRemoveDetails(check) {
      if(check){
        if(this.args.products.get('firstObject.id')){
          this.invoice_details.pushObject(EmberObject.create({
            "product": this.args.products.get('firstObject.id'),
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
    
    @action
    productDetailSelect(value, index) {
      console.log(value, index)
      //  this.invoice_details[index].product = value;
    }
}
