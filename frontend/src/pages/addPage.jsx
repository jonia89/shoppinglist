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
        <New
          items={this.props.items}
          checked={this.props.checked}
          addItem={this.props.addItem}
        />
        <Manage
          items={this.props.items}
          checked={this.props.checked}
          deleteItem={this.props.deleteItem}
        />
        <Counter
          items={this.props.items}
          checked={this.props.checked}
          countObjects={this.props.countObjects}
        />
        <div style={this.clearStyle}>
          <Clearchecked />
          <Clear clearAll={this.props.clearAll}/>
        </div>
        <Icon />
      </div>
    );
  }
}
