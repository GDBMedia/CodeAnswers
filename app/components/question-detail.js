import Ember from 'ember';
import sweetAlert from 'npm:sweetalert';
var swal = sweetAlert;

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
      var newthis = this;
       swal({
         title: "Are you sure?",
         text: "You will not be able to recover this Question!",
         type: "warning",
         showCancelButton: true,
         confirmButtonColor: "#DD6B55",
         confirmButtonText: "Yes, delete it!",
         cancelButtonText: "No, cancel!",
         closeOnConfirm: false,
         closeOnCancel: false },
         function(isConfirm){
           if (isConfirm) {
             swal("Deleted!", "Your Question has been deleted.", "success");
             newthis.sendAction('destroyQuestion', question);
           }
          else {
            swal("Cancelled", "Your Question is safe :)", "error");   }
          });
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
