import Route from '@ember/routing/route';
import { computed, set, action } from '@ember/object';
import { task } from 'ember-concurrency';
import {hash} from 'rsvp';

export default class ApplicationRoute extends Route {


    // @task(function*(model, data) {
    //         get(this, 'store').createRecord( model, data).save();

    // }) create;

    model() {
        // this.get('store').createRecord('todo', {title:"hello", isCompleted:true}).save();
          return hash({
            // orders: this.get('store').findAll('order'),
            customer: this.get('store').findAll('customer')
          });
    }

    setupController(controller, model) {
        let customer = this.get('store').findAll('customer')
        return controller.set('customer', customer);
      }

    @action
    create(model, data) {
        get(this, 'store').createRecord(model, data ).save();
    }
}
