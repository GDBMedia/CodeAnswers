import Ember from 'ember';

export default Ember.Component.extend({
  init(){
    this._super()
    this.set("orderedQuestions", this.get('questions').toArray().reverse());
  },
  orderedQuestions: Ember.computed('questions.length',function(){
    return this.get('questions').toArray().reverse();
  }),
  actions: {
    destroyQuestion(question) {
      this.sendAction('destroyQuestion', question);
    }
  }
});
