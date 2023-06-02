import React, { Component } from "react";
import { items, checked } from "../App";

export default class Clear extends Component {
  constructor(props) {
    super(props);
    this.clearAll.bind(this);
    this.state = {
      items: [...items],
      checked: [...checked],
    };
  }

  clearAll = () => {
    console.log("Tyhjentää listan");
    console.log(this.state.items, this.state.checked);
    const areYouSure = prompt("Oletko varma? (kirjoita kyllä vahvistaaksesi)");
    if (areYouSure === "kyllä") {
      while (this.state.items.length > 0) {
        this.state.items.pop();
        while (this.state.checked.length > 0) {
          this.state.checked.pop();
        }
      }
      if (this.state.items.length === 0 && this.state.checked.length === 0) {
        console.log(this.state.items, this.state.checked);
        return alert("Lista tyhjennetty");
      } else {
        return this.state.items && this.state.checked;
      }
    }
  };
  render() {
    return (
      <div>
        <button
          onDoubleClick={this.clearAll}
          className="btn btn-danger btn-m m-2"
        >
          Tyhjennä tuplaklikkaamalla
        </button>
      </div>
    );
  }
}
