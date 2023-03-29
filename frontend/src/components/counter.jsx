import React, { Component } from "react";
import { items, checked } from "../App";

export default class Counter extends Component {
  textStyle = {
    fontSize: "25px",
    color: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  constructor(props) {
    super(props);
    this.countObjects.bind(this);
    this.state = {
      items: [...items],
      checked: [...checked]
    };
  }

  countObjects = () => {
    if (this.state.items.length + this.state.checked.length === 0)
      return "Ostoslista on tyhjä";
    else if (this.state.items.length + this.state.checked.length === 1)
      return (
        "Ostoslistalla on " +
        (this.state.items.length + this.state.checked.length) +
        " tuote"
      );
    return (
      "Ostoslistalla on " +
      (this.state.items.length + this.state.checked.length) +
      " tuotetta"
    );
  };
  render() {
    return (
      <div>
        <span style={this.textStyle} className="badge badge-primary m-5">
          {this.countObjects()}
        </span>
      </div>
    );
  }
}
