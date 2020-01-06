import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service('toast') notifications;

  model() {
    return hash({
      buyer: this.get('store').findAll('buyer'),
      supplier: this.get('store').findAll('supplier'),
      products: this.get('store').findAll('product')
    });
  }

  setupController(controller, model) {
    let customer = this.get('store').findAll('customer')
    return controller.set('customer', customer);
  }

}
