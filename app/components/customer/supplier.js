import Component from '@glimmer/component';
import { computed, set, action, get } from '@ember/object';
import { task } from 'ember-concurrency';
import {inject} from '@ember/service';
import { tracked } from "@glimmer/tracking";

export default class CustomerSupplierComponent extends Component {
    // store = inject();
    store =  this.args.store;
    // @tracked storeMy = null;

    constructor() {
        super(...arguments);
        
        set(this, 'supplier', {type: "supplier"});
    }
    
    @task(function*() {
    //    get(this, "create")( "customer", get(this, "supplier"))
      this.store.createRecord("customer", get(this, "supplier")).save();

      }) createSupplier;

    @action
    submit() {
        
        return;
        
    }
}
