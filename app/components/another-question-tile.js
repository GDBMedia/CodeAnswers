import Ember from 'ember';

export default Ember.Component.extend({
  init: function() {
    this._super();
    this.set('questions', this.store.findAll('question'));
 },
  questions: "none",
  setquestions: Ember.computed('questions.length', function(){
    this.set('questions', this.store.findAll('question'));
  }),
  actions: {
    destroyQuestion(question) {
      this.sendAction('destroyQuestion', question);
    }
  }
});
