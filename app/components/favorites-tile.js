import Ember from 'ember';

export default Ember.Component.extend({
    favorite: Ember.inject.service(),
    actions: {
      destroyQuestion(question) {
        this.sendAction('destroyQuestion', question);
      }
    }
});
