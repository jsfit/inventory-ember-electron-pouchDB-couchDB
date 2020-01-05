
import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({

    inv_no  : DS.attr('string'),
    date        : DS.attr('string'),
    detail      : DS.hasMany('invoice_detail'),
    createdAt   : DS.attr("timestamp")

});