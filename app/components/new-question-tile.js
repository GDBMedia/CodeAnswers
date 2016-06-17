import Ember from 'ember';

import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        name: this.get('name'),
        content: this.get('content'),
        details: this.get('details'),
        timestamp: moment().format("MMMM Do YYYY, h:mm a"),
        numOfAnswers: 0,
        favorited: false,
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
