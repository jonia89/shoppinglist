import "../App.css";
import Add from "../components/toAdd";
import List from "../components/list";
import Left from "../components/itemsLeft";
import Icon from "../components/Icon";
import React, { Component } from "react";

export default class Listpage extends Component {
  render() {
    return (
      <div>
        <Add />
        <Left items={this.props.items} checked={this.props.checked} />
        <List items={this.props.items} checked={this.props.checked} />
        <Icon />
      </div>
    );
  }
}
