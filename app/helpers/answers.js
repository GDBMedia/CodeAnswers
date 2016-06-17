import Ember from 'ember';

export function answers(params) {
  var length = params[0];
  if (length === 1) {
    return length + " Answer "
  }else{
    return length + " Answers "
  }
}

export default Ember.Helper.helper(answers);
