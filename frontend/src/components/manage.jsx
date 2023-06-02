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
    color: "green",
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
    if (this.state.items.includes(item)) {
      item = this.state.items.splice(this.state.items.indexOf(item), 1);
      return this.state.items;
    } else if (this.state.checked.includes(item)) {
      item = this.state.checked.splice(this.state.checked.indexOf(item), 1);
      return this.state.checked;
    }
    console.log("Poistaa tuotteen", item);
    return [...items, ...checked];
  };
  renderItems() {
    return (
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
    );
  }

  renderChecked() {
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
    </ul>;
  }

  render() {
    return (
      <React.Fragment>
        <div className="manage-items-List" style={this.itemsStyle}>
          {this.renderItems()}
        </div>
        <div className="manage-checked-list" style={this.checkedStyle}>
          {this.renderChecked()}
        </div>
      </React.Fragment>
    );
  }
}
