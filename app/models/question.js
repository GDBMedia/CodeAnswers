import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  content: DS.attr(),
  details: DS.attr(),
  timestamp: DS.attr(),
  numOfAnswers: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
