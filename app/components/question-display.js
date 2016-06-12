import Ember from 'ember';
import sweetAlert from 'npm:sweetalert';
var swal = sweetAlert;

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
    destroyComment(answer) {
      answer.destroyRecord();
      this.transitionTo('index');
    }
  }
});
