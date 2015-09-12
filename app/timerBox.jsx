import React from "react";
import Timer from "./timer.jsx";
import TimeHider from "./timeHider.jsx";


export default React.createClass({
  getInitialState: function(){
    return {showTimer: true};
  },
  toggleTimer: function(){
    this.props.onButtonClick(!this.props.isVisible);
  },
  refreshTime: function(){
    console.log('Time!');
    this.props.updateTime(new Date());
  },
  componentDidMount: function(){
    this.refreshTime();
    this.interval = setInterval(this.refreshTime, 1000);
  },
  componentWillUnmount: function (){
    clearInterval(this.interval);
  },

  render:  function() {
    const buttonText =  this.props.isVisible ? 'Hide':'Show';
    const timer = this.props.isVisible ? <Timer time={this.state.time}/> : '';
    return (
      <div className="timerBox">
        {timer}

        <TimeHider toggleClick={this.toggleTimer} buttonText={buttonText} />
      </div>
    );
  },
});
