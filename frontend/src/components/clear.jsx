import React, { Component } from "react";
import items from "../items";

export default class Clear extends Component {
  constructor() {
    super();
    this.clearAll.bind(this);
  }

  clearAll = () => {
    console.log("Tyhjentää listan");
    console.log(items);
    const areYouSure = prompt("Oletko varma? (kirjoita kyllä vahvistaaksesi)");
    if (areYouSure === "kyllä") {
      while (items.length > 0) {
        items.pop();
      }
      if (items.length === 0) {
        console.log(items);
        return alert("Lista tyhjennetty");
      } else {
        return items;
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
