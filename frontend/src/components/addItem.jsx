import React, { Component } from "react";
import checked from "../checked";
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

  handleSubmit = (item) => {
    console.log("handleSubmit");
    if (items.includes(item) || checked.includes(item)) {
      console.log(item);
    }
    console.log(items);
    return items;
  }

  writeItem = () => {
    console.log("merkkiä pitkä")
    return;
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
