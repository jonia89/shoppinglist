import Checkbox from "@mui/material/Checkbox";
import { items, checked } from "../App";
import React, { Component } from "react";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.liftUp.bind(this);
    this.dropDown.bind(this);
    this.state = {
      items: [...items],
      checked: [...checked],
    };
  }

  listStyle = {
    fontSize: "25px",
    margin: "30px",
    display: "flex",
  };

  liftUp = (item) => {
    item = this.state.checked.splice(this.state.checked.indexOf(item));
    console.log("nostaa", item);
    items.push(item);
    console.log(items);
    console.log(checked);
    return this.state.items;
  };

  dropDown = (item) => {
    item = this.state.items.splice(this.state.items.indexOf(item));
    console.log("tiputtaa", item);
    checked.push(item);
    console.log(items);
    console.log(checked);
    return this.state.checked;
  };
  renderItems() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <li key={item}>
            {item}
            <Checkbox onChange={this.dropDown} color="success" />
          </li>
        ))}
      </ul>
    );
  }

  renderChecked() {
    return (
      <ul>
        {checked.map((item) => (
          <li key={item}>
            {item}
            <Checkbox
              onChange={this.liftUp}
              defaultChecked={true}
              color="success"
            />
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className="items-list" style={this.listStyle}>
          {this.renderItems()}
        </div>
        <div className="checked-list" style={this.listStyle}>
          {this.renderChecked()}
        </div>
      </React.Fragment>
    );
  }
}
