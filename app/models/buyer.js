
import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
    name        : DS.attr('string'),
    cnic        : DS.attr('string'),
    address     : DS.attr('string'),
    phone       : DS.attr('string'),
    strn        : DS.attr('string'),
    ntn         : DS.attr('string'),
    type        : DS.attr('string'),
    invoice     : DS.hasMany('invoice'),
    selected    : DS.attr('boolean'),
});