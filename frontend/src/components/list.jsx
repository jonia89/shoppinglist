import Checkbox from "@mui/material/Checkbox";
import React, { Component } from "react";

export default class List extends Component {
  listStyle = {
    fontSize: "25px",
    margin: "30px",
    display: "flex",
  };

  renderItems = () => {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item}>
            {item}
            <Checkbox
              onChange={this.props.dropDown}
              defaultChecked={false}
              color="success"
              onClick={this.props.dropDown}
            />
          </li>
        ))}
      </ul>
    );
  };

  renderChecked = () => {
    return (
      <ul>
        {this.props.checked.map((item) => (
          <li key={item}>
            {item}
            <Checkbox
              onChange={this.props.liftUp}
              defaultChecked={true}
              color="success"
              onClick={this.props.liftUp}
            />
          </li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="items-list" style={this.listStyle}>
          {this.renderItems}
        </div>
        <div className="checked-list" style={this.listStyle}>
          {this.renderChecked}
        </div>
      </React.Fragment>
    );
  }
}
