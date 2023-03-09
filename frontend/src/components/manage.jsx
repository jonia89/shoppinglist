import React, { Component } from "react";
import checked from "../checked";
import { items } from "./addItem";

export default class Manage extends Component {
  listStyle = {
    fontSize: "25px",
    margin: "50px",
    display: "flex",
  };

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      items: [...items],
      checked: [...checked],
    };
    this.state = { itemList: [...this.state.items, ...this.state.checked] };
  }
  handleDelete = (item) => {
    console.log("Poistaa tuotteen", item);
    return this.state.itemList;
  };
  render() {
    return (
      <div>
        <span style={this.listStyle}>
          <ul>
            {this.state.itemList.map((item) => (
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
