import React, { Component } from "react";
import items from "../items";

export default class Manage extends Component {
  listStyle = {
    fontSize: "25px",
    margin: "50px",
    display: "flex",
  };
  handleDelete = (item) => {
    items.pop(item);
    console.log("Poistaa tuotteen");
  };
  render() {
    return (
      <div>
        <span style={this.listStyle}>
          <ul>
            {items.map((item) => (
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
