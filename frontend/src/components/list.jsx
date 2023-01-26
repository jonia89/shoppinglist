import Checkbox from "@mui/material/Checkbox";
import items from "../items";
import { Component } from "react";

export default class List extends Component {
  listStyle = {
    fontSize: "25px",
    margin: "30px",
    display: "flex",

    dropDown() {
      console.log("tiputtaa checkatun jonon hännille tms.");
      if (Checkbox.color === "success") {
        items.unshift();
      } else {
        items.pop().push(items);
      }
      return items;
    },
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
