import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        name: this.get('name'),
        content: this.get('content'),
        details: this.get('details'),
        timestamp: moment().format("MMMM Do YYYY, h:mm a") + " Edited",
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
