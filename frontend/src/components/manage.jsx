import React, { Component } from "react";
import { items, checked } from "../App";

export default class Manage extends Component {
  itemsStyle = {
    fontSize: "25px",
    margin: "10px",
    display: "flex",
  };
checkedStyle = {
  fontSize: "25px",
  margin: "10px",
  display: "flex",
  color: "green"
};
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      items: [...items],
      checked: [...checked],
    };
  }

  handleDelete = (item) => {
    console.log("Poistaa tuotteen", item);
    return this.state.itemList;
  };
  render() {
    return (
      <div>
        <span style={this.itemsStyle}>
          <ul>
            {this.state.items.map((item) => (
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
        <span style={this.checkedStyle}>
          <ul>
            {this.state.checked.map((item) => (
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
