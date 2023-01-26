import React, { Component } from "react";
import "../App.css";
import Back from "../components/toList";
import Manage from "../components/manage";
import Counter from "../components/counter";
import New from "../components/addItem";
import Icon from "../components/Icon";
import Clear from "../components/clear";

export default class Addpage extends Component {
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
        <Clear />
        <Icon />
      </div>
    );
  }
}
