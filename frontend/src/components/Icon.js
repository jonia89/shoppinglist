import logo from "../logo.png";
import "../Icon.css";
import React, { Component } from "react";

export default class Icon extends Component {
  render() {
    return (
      <div className="Icon">
        <header className="Icon-header">
          <img src={logo} className="Icon-logo" alt="logo" />
        </header>
      </div>
    );
  }
}
