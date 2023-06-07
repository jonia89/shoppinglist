import "../App.css";
import Back from "../components/toList";
import Manage from "../components/manage";
import Counter from "../components/counter";
import New from "../components/addItem";
import Icon from "../components/Icon";
import Clear from "../components/clear";
import Clearchecked from "../components/clearChecked";
import React, { Component } from "react";

export default class Addpage extends Component {
  clearStyle = {
    display: "flex",
    direction: "row",
  };
  render() {
    return (
      <div>
        <Back />
        <New items={this.props.items} checked={this.props.checked} />
        <Manage items={this.props.items} checked={this.props.checked} />
        <Counter items={this.props.items} checked={this.props.checked} />
        <div style={this.clearStyle}>
          <Clearchecked items={this.props.items} checked={this.props.checked}/>
          <Clear items={this.props.items} checked={this.props.checked}/>
        </div>
        <Icon />
      </div>
    );
  }
}
