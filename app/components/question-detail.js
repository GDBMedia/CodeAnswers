import Ember from 'ember';
import sweetAlert from 'npm:sweetalert';
var swal = sweetAlert;

export default Ember.Component.extend({
  sortBy: ['score:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),
  updateanswerlength: Ember.observer('question.answers.length',function(){
    this.set('question.numOfAnswers', this.get('question.answers.length'));
    this.get('question').save();
  }),
  actions:{
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      var num = question.get('answers.length');
      console.log(num);
      question.set('numOfAnswers', num);
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.set('addNewAnswer', false);
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
