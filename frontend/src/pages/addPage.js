import React, { Component } from "react";
import "../App.css";
import Back from "../components/toList";
import Manage from "../components/manage";
import Counter from "../components/counter";
import New from "../components/addItem";
import Icon from "../components/Icon";
import Clear from "../components/clear";
import Clearchecked from "../components/clearChecked";

export default class Addpage extends Component {
  clearStyle = {
    display: "flex",
    direction: "row",
  };

  listPage = () => {
    return;
  };
  render() {
    return (
      <div>
        <Back />
        <New />
        <Manage />
        <Counter />
        <div style={this.clearStyle}>
          <Clearchecked />
          <Clear />
        </div>
        <Icon />
      </div>
    );
  }
}
