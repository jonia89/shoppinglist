import React, { Component } from "react";

export default class Left extends Component {
  textStyle = {
    fontSize: "25px",
    color: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  render() {
    return (
      <div>
        <span style={this.textStyle} className="badge badge-primary m-5">
          {this.props.itemsLeft}
        </span>
      </div>
    );
  }
}
