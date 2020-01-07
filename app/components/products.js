import Component from '@glimmer/component';
import { computed, set, get, action } from '@ember/object';
import { task } from 'ember-concurrency';
import { inject as service } from '@ember/service';
import $ from 'jquery';
import { tracked } from "@glimmer/tracking";

export default class ProductsComponent extends Component {
    @service() store;
    
    constructor() {
        super(...arguments);
        set(this, 'product', {});
    }

    @computed('allProducts')
    get productSelect() {

        let dataSet = this.args.products.map(p => [p.company, p.model, p.retail_price, p.stock,
            `<button type="button" class="btn btn-danger product-delete" data-id=${p.id}>Delete</button>`
        ]);
        $("#table_id").dataTable().fnDestroy();
        $('#table_id').DataTable( {
            data: dataSet,
            columns: [
                { title: "Company" },
                { title: "Model" },
                { title: "Retail Price" },
                { title: "Stock" },
                { title: "Actions" }
            ]
        } );

        let self= this;
        $('.product-delete').on('click', function() {
            var id = $(this).attr('data-id');
            self.store.peekRecord("product", id).destroyRecord();
        });
    }

    @task(function* () {
        this.store.createRecord("product", get(this, "product")).save();
    }) createProduct;
}
