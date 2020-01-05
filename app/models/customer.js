
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
    selected    : DS.attr('boolean'),
});