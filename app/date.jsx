import React from "react";
import Moment from "moment";

export default React.createClass({
  render: function() {
    return (
      <div className="date">
      <h2>{Moment(this.props.date).format('DD MMMM YYYY')}</h2>
      </div>
    );
  },
});
