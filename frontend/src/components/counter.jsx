import React, { Component } from "react";
import items from "../items";

export default class Counter extends Component {
  textStyle = {
    fontSize: "25px",
    color: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  countObjects = () => {
    if (items.length === 0) return "Ostoslista on tyhjä";
    else if (items.length === 1)
      return "Ostoslistalla on " + items.length + " tuote";
    return "Ostoslistalla on " + items.length + " tuotetta";
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
