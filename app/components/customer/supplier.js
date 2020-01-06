import Component from '@glimmer/component';
import { set, get } from '@ember/object';
import { task } from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default class CustomerSupplierComponent extends Component {
    @service() store;

    constructor() {
        super(...arguments);
        set(this, 'supplier', {});
    }

    @task(function* () {
        this.store.createRecord("supplier", get(this, "supplier")).save();
    }) createSupplier;

}
