import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.set('addNewAnswer', false);
      this.transitionTo('question', params.question);
    },
    answerFormShow(){
      this.set('addNewAnswer', true);
    },
    delete(question) {
       if (confirm('Are you sure you want to delete this Question?')) {
         this.sendAction('destroyQuestion', question);
       }
     },
    destroyAnswer(answer) {
      answer.destroyRecord();
    },
    thumbsSave(answer, params){
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          answer.set(key,params[key]);
        }
      });
      answer.save();
    }
  }
});
