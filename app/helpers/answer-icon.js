import Ember from 'ember';

export function answerIcon(score) {
  if(score > 14){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire left fire valign"></span>');
  }
  else if(score < -4){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-trash left trash valign"></span>');
  }else{
    return Ember.String.htmlSafe();
  }
}

export default Ember.Helper.helper(answerIcon);
