import "../App.css";
import Back from "../components/toList";
import Counter from "../components/counter";
import Icon from "../components/Icon";
import Add from "../components/toAdd";
import React, { Component } from "react";

export default class Rootpage extends Component {
  rowStyle = {
    display: "flex",
    direction: "row",
  };

  render() {
    return (
      <div>
        <Counter items={this.props.items} checked={this.props.checked} />
        <div style={this.rowStyle}>
          <Back />
          <Add />
        </div>
        <Icon />
      </div>
    );
  }
}
