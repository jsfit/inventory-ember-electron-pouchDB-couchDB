import Component from '@glimmer/component';
import { set, get } from '@ember/object';
import { task } from 'ember-concurrency';

export default class CustomerSupplierComponent extends Component {
    // store = inject();
    store =  this.args.store;
    // @tracked storeMy = null;

    constructor() {
        super(...arguments);
        
        set(this, 'supplier', {});
    }
    
    @task(function*() {
          this.store.createRecord("supplier", get(this, "supplier")).save();
      }) createSupplier;

}
