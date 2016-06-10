import Ember from 'ember';

export default Ember.Component.extend({
  score:"nothing",
  newScore:"nothing",
  actions:{
    delete(answer) {
       if (confirm('Are you sure you want to delete this Answer?')) {
         this.sendAction('destroyAnswer', answer);
       }
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
