// app/models/todo.js

import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
  title       : DS.attr('string'),
  isCompleted : DS.attr('boolean')
});