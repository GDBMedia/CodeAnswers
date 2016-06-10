import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions:{
    answerFormShow(){
      this.set('addNewAnswer', true);
    },
    save() {
      var params = {
        name: this.get('name'),
        content: this.get('content'),
        timestamp: moment().format("MMMM Do YYYY, h:mm a"),
        score: 0,
        question: this.get('question')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
