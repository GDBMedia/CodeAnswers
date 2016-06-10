import Ember from 'ember';

export default Ember.Component.extend({
  answerShow: false,
  actions:{
    showAnswers(){
      if(this.answerShow === false){
        this.set('answerShow', true);
      }else{
        this.set('answerShow', false);
      }

    },
    delete(question) {
       if (confirm('Are you sure you want to delete this Question?')) {
         this.sendAction('destroyQuestion', question);
       }
     },
    destroyComment(answer) {
      answer.destroyRecord();
      this.transitionTo('index');
    }
  }
});
