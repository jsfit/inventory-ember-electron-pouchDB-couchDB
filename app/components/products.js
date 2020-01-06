import Component from '@glimmer/component';
import { set, get } from '@ember/object';
import { task } from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default class ProductsComponent extends Component {
    @service() store;
    
    constructor() {
        super(...arguments);
        set(this, 'product', {});
    }

    @task(function* () {
        this.store.createRecord("product", get(this, "product")).save();
    }) createProduct;


}
