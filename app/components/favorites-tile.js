import Ember from 'ember';

export default Ember.Component.extend({
    favorite: Ember.inject.service(),
    actions: {
      destroyQuestion(question) {
        this.get('favorite').remove(question);
        this.sendAction('destroyQuestion', question);
      }
    }
});
