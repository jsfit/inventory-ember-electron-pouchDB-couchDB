import Component from '@glimmer/component';
import { computed, set, get, action } from '@ember/object';
import { task } from 'ember-concurrency';
import { inject as service } from '@ember/service';
import $ from 'jquery';
import { tracked } from "@glimmer/tracking";

export default class ProductsComponent extends Component {
    @service() store;
    @tracked allProducts = this.args.products;

    constructor() {
        super(...arguments);
        set(this, 'product', {});

        $(document).ready( function () {
            $('#table_id').DataTable();
        } );
    }

    @computed('allProducts')
    get productSelect() {

        let dataSet = this.allProducts.map(p => [p.company, p.model, p.retail_price, p.stock
        ]);
        $("#table_id").dataTable().fnDestroy();
        // return this.allProducts;
        $('#table_id').DataTable( {
            data: dataSet,
            columns: [
                { title: "Company" },
                { title: "Model" },
                { title: "Retail Price" },
                { title: "Stock" }
            ]
        } );
    }

    @task(function* () {
        this.store.createRecord("product", get(this, "product")).save().then((d)=>{
            console.log(d);
            // $('#table_id').DataTable().draw();
            // $('#table_id').DataTable().api.row.clear().draw();
            // $('#table_id').DataTable().row.add( {
            //     "Company":       "Tiger Nixon",
            //     "Model":   "System Architect",
            //     "Retail Price":     "$3,120",
            //     "Stock": "66",
            // } ).draw();
        });


    }) createProduct;

    @action
    deleteProduct(product){
        product.destroyRecord();
        $('#table_id').DataTable().draw();
        // product.deleteRecord();
        // product.isDeleted; // => true
        // product.save(); /
    }

    @action
    editProduct(product){
        // product.destroyRecord();
        // product.deleteRecord();
        // product.isDeleted; // => true
        // product.save(); /
    }
}
