export const SET_TIME = 'SET_TIME';
export const SET_VISIBILITY = 'SET_VISIBILITY';

//Actions
export function setTime(time){
  return {type: SET_TIME, time};
}

export function setVisibility(isVisible){
  return {type: SET_VISIBILITY, isVisible};
}
