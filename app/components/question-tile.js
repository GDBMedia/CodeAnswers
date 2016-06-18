import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['numOfAnswers:desc'],
  sortedQuestions: Ember.computed.sort('questions', 'sortBy'),
  // orderedQuestions: Ember.computed('questions.length',function(){
  //   console.log(this.sortedQuestions);
  //   return this.get('questions').toArray().reverse();
  // }),
  actions: {
    destroyQuestion(question) {
      this.sendAction('destroyQuestion', question);
    }
  }
});
