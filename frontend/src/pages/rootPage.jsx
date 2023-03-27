import React, { Component } from "react";
import "../App.css";
import Counter from "../components/counter";
import Icon from "../components/Icon";
import Back from "../components/toList";

export default class Rootpage extends Component {
  rootPage() {
    return;
  }
  render() {
    return (
      <div>
        <Counter />
        <Back />
        <Icon />
      </div>
    );
  }
}
