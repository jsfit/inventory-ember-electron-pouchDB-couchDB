import Component from '@glimmer/component';
import { set, get } from '@ember/object';
import { task } from 'ember-concurrency';

export default class CustomerBuyerComponent extends Component {
    store =  this.args.store;

    constructor() {
        super(...arguments);
        set(this, 'buyer', {});
    }
    
    @task(function*() {
      this.store.createRecord("buyer", get(this, "buyer")).save();
      }) createBuyer;

 
}
