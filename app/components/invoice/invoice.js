import Component from '@glimmer/component';
import { computed, set, action, get } from '@ember/object';
import $ from 'jquery';
export default class InvoiceInvoiceComponent extends Component {

    constructor() {
        super(...arguments);
        $(document).ready(function() {
          $('#supplierSelect').select2();
          $('#buyerSelect').select2();
         });

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


    @computed('firstName', 'lastName')
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
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
}
