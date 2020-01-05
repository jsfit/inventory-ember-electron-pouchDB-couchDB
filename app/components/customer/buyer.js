import Component from '@glimmer/component';
import { computed, set, action, get } from '@ember/object';
import { task } from 'ember-concurrency';
import {inject} from '@ember/service';
import { tracked } from "@glimmer/tracking";

export default class CustomerBuyerComponent extends Component {
    store =  this.args.store;

    constructor() {
        super(...arguments);
        set(this, 'buyer', {type: "buyer"});
    }
    
    @task(function*() {
      this.store.createRecord("customer", get(this, "buyer")).save();
      }) createBuyer;

    @action
    submit() {
        
        return;
        
    }
}
