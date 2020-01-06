
import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({

    company: DS.attr('string'),
    model: DS.attr('string'),
    retail_price: DS.attr('number'),
    sale_price: DS.attr('number'),
    stock: DS.attr('number'),
    invoice_details: DS.belongsTo('invoice_detail'),
    selected: DS.attr('boolean')
});