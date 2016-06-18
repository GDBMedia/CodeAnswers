import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    destroyQuestion(question) {
      var answer_deletions = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
        return question.destroyRecord();

      });
      question.destroyRecord();
      this.transitionTo('favorites');
    }
  }
});
