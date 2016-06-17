import Ember from 'ember';
import sweetAlert from 'npm:sweetalert';
var swal = sweetAlert;

export default Ember.Component.extend({
  favorite: Ember.inject.service(),
  sortBy: ['score:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),
  answerShow: false,
  clicked: false,
  init() {
    this._super();
    if(this.get('favorite.favorites').indexOf(this.get('question')) !== -1){
      this.set('clicked', true);
    }else{
      this.set('clicked', false);
    }
  },
  favorited: Ember.observer('favorite.favorites.length', function(){
    if(this.get('favorite.favorites').indexOf(this.get('question')) !== -1){
      this.set('clicked', true);
    }else{
      this.set('clicked', false);
    }
  }),
  updateanswerlength: Ember.observer('question.answers.length',function(){
    this.set('question.numOfAnswers', this.get('question.answers.length'));
    this.get('question').save();
  }),
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
    },
    addToFavorites(question) {
      if(this.clicked === false){
          this.get('favorite').add(question);
       }
      else{
        this.get('favorite').remove(question);
     }
   },
  }
});
