import React, { Component } from "react";
import checked from "../checked";
import items from "../items";

export default class Clear extends Component {
  constructor() {
    super();
    this.clearAll.bind(this);
  }

  clearAll = () => {
    console.log("Tyhjentää listan");
    console.log(items, checked);
    const areYouSure = prompt("Oletko varma? (kirjoita kyllä vahvistaaksesi)");
    if (areYouSure === "kyllä") {
      while (items.length > 0) {
        items.pop();
        while (checked.length > 0) {
          checked.pop();
        }
      }
      if (items.length === 0 && checked.length === 0) {
        console.log(items, checked);
        return alert("Lista tyhjennetty");
      } else {
        return items && checked;
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
