import Checkbox from "@mui/material/Checkbox";
import React from "react";

const List = () => {

  const listStyle = {
    fontSize: "25px",
    margin: "30px",
    display: "flex",
  };

  const liftUp = (item) => {
    console.log("nostaa", item);
    this.props.checked.pop(item);
    this.props.items.push(item);
    console.log(this.props.items);
    console.log(this.props.checked);
    return [...this.props.items, ...this.props.checked];
  };

  const dropDown = (item) => {
    console.log("tiputtaa", item);
    this.props.items.pop(item);
    this.props.checked.push(item);
    console.log(this.props.items);
    console.log(this.props.checked);
    return [...this.props.items, ...this.props.checked];
  };


    return (
      <div className="item-list">
        <span style={listStyle}>
          <ul>
            {this.props.items.map((item) => (
              <li key={item}>
                {item}
                <Checkbox onChange={dropDown()} color="success" />
              </li>
            ))}
          </ul>
        </span>
        <span style={listStyle}>
          <ul>
            {this.props.checked.map((item) => (
              <li key={item}>
                {item}
                <Checkbox
                  onChange={liftUp()}
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

export default List