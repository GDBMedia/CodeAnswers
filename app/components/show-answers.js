import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    destroyAnswer(answer) {
      answer.destroyRecord();
    },
    thumbsSave(answer, params){
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          answer.set(key,params[key]);
        }
      });
      answer.save();
    }
  }
});
