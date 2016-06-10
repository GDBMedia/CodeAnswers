import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  content: DS.attr(),
  timestamp: DS.attr(),
  score: DS.attr('number'),
  question: DS.belongsTo('question', { async: true })
});
