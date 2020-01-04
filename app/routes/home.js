import Route from '@ember/routing/route';
import {hash} from 'rsvp';

export default class HomeRoute extends Route {

    model() {
      // this.get('store').createRecord('todo', {title:"hello", isCompleted:true}).save();
        return hash({
          // orders: this.get('store').findAll('order'),
          todo: this.get('store').findAll('todo')
        });
      }
 
}
