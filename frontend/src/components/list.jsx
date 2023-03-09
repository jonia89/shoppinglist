import Checkbox from "@mui/material/Checkbox";
import { items } from "./addItem";
import { Component } from "react";
import checked from "../checked";

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
    console.log("nostaa", item);
    checked.pop(item);
    items.push(item);
    console.log(items);
    console.log(checked);
    return [...items, ...checked];
  };

  dropDown = (item) => {
    console.log("tiputtaa", item);
    items.pop(item);
    checked.push(item);
    console.log(items);
    console.log(checked);
    return [...items, ...checked];
  };

  render() {
    return (
      <div className="item-list">
        <span style={this.listStyle}>
          <ul>
            {this.state.items.map((item) => (
              <li key={item}>
                {item}
                <Checkbox onChange={this.dropDown} color="success" />
              </li>
            ))}
          </ul>
        </span>
        <span style={this.listStyle}>
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
        </span>
      </div>
    );
  }
}
