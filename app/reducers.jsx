import {combineReducers} from 'redux';
import {SET_TIME, SET_VISIBILITY} from './actions.jsx';


function visibility(state = true, action){
  switch(action.type){
    case SET_VISIBILITY:
      return action.isVisible;
    default:
      return state;
  }
}

function time(state = new Date(), action){
  switch(action.type){
    case SET_TIME:
      return action.time;
    default:
      return state;
  }
}

const piScreenApp = combineReducers({
  time,
  visibility
});

export default piScreenApp;
