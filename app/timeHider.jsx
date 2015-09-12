import React from "react";

export default React.createClass({
  render: function() {
    return (
      <button onClick={this.props.toggleClick}>{this.props.buttonText}</button>
    );
  },
});
