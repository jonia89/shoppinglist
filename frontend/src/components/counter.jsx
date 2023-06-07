import React, { Component } from "react";

export default class Counter extends Component {
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
          {this.props.countObjects}
        </span>
      </div>
    );
  }
}
