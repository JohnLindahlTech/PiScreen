import React, { Component, PropTypes } from "react";
import {connect} from "react-redux";
import {setTime, setVisibility} from './actions.jsx';
import Greeting from "./greeting.jsx";
import TimerBox from "./timerBox.jsx";



class App extends Component {
  render(){
    const {dispatch, time, visibility} = this.props;
    return (
      <div>
        <Greeting name="John"/>
        <TimerBox time={time}
          isVisible={visibility}
          onButtonClick={newVisibility => dispatch(setVisibility(newVisibility)) }
          updateTime={newTime => dispatch(setTime(newTime))}/>
      </div>
    )
  }

}

function select(state){
  return state
}

export default connect(select)(App);
