import React from "react";
import Time from "./time.jsx";
import DateUI from "./date.jsx";

export default React.createClass({
  render:  function() {
    return (
      <div className="time">
        <DateUI date={this.props.time}/>
        <Time time={this.props.time}/>
      </div>
    );
  },
});
