import Ember from 'ember';
import sweetAlert from 'npm:sweetalert';
var swal = sweetAlert;

export default Ember.Component.extend({
  score:"nothing",
  newScore:"nothing",
  actions:{
    delete(answer) {
      var newthis = this;
       swal({
         title: "Are you sure?",
         text: "You will not be able to recover this Answer!",
         type: "warning",
         showCancelButton: true,
         confirmButtonColor: "#DD6B55",
         confirmButtonText: "Yes, delete it!",
         cancelButtonText: "No, cancel!",
         closeOnConfirm: false,
         closeOnCancel: false },
         function(isConfirm){
           if (isConfirm) {
             swal("Deleted!", "Your Answer has been deleted.", "success");
             newthis.sendAction('destroyAnswer', answer);
           }
          else {
            swal("Cancelled", "Your Answer is safe :)", "error");   }
          });
     },
    thumbsDown(answer){
      this.set('score', this.answer.get('score'));
      this.set('newScore', this.score-=1);
      var params = {
        score: this.newScore
      };
      this.sendAction('thumbsSave', answer, params);
    },

    thumbsUp(answer){
      this.set('score', this.answer.get('score'));
      this.set('newScore', this.score+=1);
      var params = {
        score: this.newScore
      };
      this.sendAction('thumbsSave', answer, params);

    }
  }
});
