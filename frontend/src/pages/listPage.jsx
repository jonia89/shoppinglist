import React, { Component } from "react";
import "../App.css";
import List from "../components/list";
import Left from "../components/itemsLeft";
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
        <Left />
        <List />
        <Icon />
      </div>
    );
  }
}
