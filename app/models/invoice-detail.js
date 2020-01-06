
import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({

    invoice_no  : DS.belongsTo('invoice'),
    product     : DS.belongsTo('product'),
    qty         : DS.attr('number'),
    retail_price: DS.attr('number'),

});