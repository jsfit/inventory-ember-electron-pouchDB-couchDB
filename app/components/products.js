import Component from '@glimmer/component';
import { computed, set, action, get } from '@ember/object';
import { task } from 'ember-concurrency';

export default class ProductsComponent extends Component {
        store =  this.args.store;
    
        constructor() {
            super(...arguments);
            
            set(this, 'product', {});
        }
        
        @task(function*() {
             this.store.createRecord("product", get(this, "product")).save();
          }) createProduct;
    
      
}
