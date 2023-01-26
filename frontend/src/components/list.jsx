import Checkbox from "@mui/material/Checkbox";
import items from "../items";
import { Component } from "react";

export default class List extends Component {
  constructor() {
    super();
    this.dropDown.bind(this);
  }

  listStyle = {
    fontSize: "25px",
    margin: "30px",
    display: "flex",
  };
  dropDown = () => {
    console.log("tiputtaa checkatun jonon hännille tms.");
    console.log(items);
    let item = items.shift();
    console.log(item);
    items.push(item);
    console.log(items);
    return items;
  };
  render() {
    return (
      <div>
        <span style={this.listStyle}>
          <ul>
            {items.map((item) => (
              <li key={item}>
                {item}
                <Checkbox onChange={this.dropDown} color="success" />
              </li>
            ))}
          </ul>
        </span>
      </div>
    );
  }
}
