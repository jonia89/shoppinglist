import React, { Component } from "react";
import checked from "../checked";
import items from "../items";

export default class Manage extends Component {
  listStyle = {
    fontSize: "25px",
    margin: "50px",
    display: "flex",
  };
  itemList = [...items, ...checked];

  handleDelete = (item) => {
    console.log("Poistaa tuotteen", item);
  };
  render() {
    return (
      <div>
        <span style={this.listStyle}>
          <ul>
            {this.itemList.sort().map((item) => (
              <li key={item}>
                {item}
                <button
                  onClick={this.handleDelete}
                  className="btn btn-danger btn-sm m-2"
                >
                  Poista
                </button>
              </li>
            ))}
          </ul>
        </span>
      </div>
    );
  }
}
