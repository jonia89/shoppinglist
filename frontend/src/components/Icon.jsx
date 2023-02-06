//import logo from "../logo.png";
import ostoskärryt from "../ostoskärryt.jpg"
import "../Icon.css";
import React, { Component } from "react";

export default class Icon extends Component {
  render() {
    return (
      <div className="Icon">
        <header className="Icon-header">
          <img src={ostoskärryt} className="Icon-logo" alt="logo" />
        </header>
      </div>
    );
  }
}
