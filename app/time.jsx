import React from "react";
import Moment from "moment";

export default React.createClass({
  render: function() {
    return (
      <div className="time">
      <h2>{Moment(this.props.time).format('hh:mm:ss')}</h2>
      </div>
    );
  },
});
