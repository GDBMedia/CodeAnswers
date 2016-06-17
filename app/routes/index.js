import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.query('question', {
      orderBy: 'numOfAnswers'
    });
 },
 actions: {
   destroyQuestion(question) {
     question.destroyRecord();
     this.transitionTo('index');
   }
 }
});
