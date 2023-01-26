import React, { Component } from "react";
import "../App.css";
import List from "../components/list";
import Counter from "../components/counter";
import Add from "../components/toAdd";
import Icon from "../components/Icon";

export default class Listpage extends Component {
  addPage() {
    return;
  }
  render() {
    return (
      <div>
        <Add />
        <Counter />
        <List />
        <Icon />
      </div>
    );
  }
}
