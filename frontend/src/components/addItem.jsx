import React, { Component } from "react";
import items from "../items";

export default class New extends Component {
  barStyle = {
    display: "flex",
    padding: "20px",
    alignItems: "center",
    justifyContent: "center",
    background: "gray",
  };
  buttonStyle = {
    margin: "20px",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "yellow",
    color: "green",
  };

  handleSubmit = () => {
    console.log("handleSubmit");
    if (items) {
      console.log("Vitun vanmainen");
    }
    console.log(items);
    return items;
  }

  writeItem = () => {
    console.log("Taidat olla melko vammainen jos et osaa edes kirjoittaa")
    return this.state
  };

  render() {
    return (
      <div className="New">
        <form style={this.barStyle} onSubmit={this.handleSubmit}>
          <input type="text" value={this.item} onChange={this.writeItem} />
          <button style={this.buttonStyle} type="submit">
            Lisää
          </button>
        </form>
      </div>
    );
  }
}
