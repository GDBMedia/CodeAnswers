import Ember from 'ember';

export function star(param) {
  if(param[0] === true){
    return Ember.String.htmlSafe('<i class="medium material-icons right star-click">star</i>');
  }else{
    return Ember.String.htmlSafe('<i class="medium material-icons right star">star_border</i>');
  }
}

export default Ember.Helper.helper(star);
