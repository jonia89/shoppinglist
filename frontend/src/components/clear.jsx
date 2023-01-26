import React, { Component } from "react";
import items from "../items";

export default class Clear extends Component {
  constructor() {
    super();
    this.clearAll.bind(this);
  }

  clearAll = () => {
    console.log("Tyhjentää listan");
    while (items.length > 0) {
      items.pop();
      if (items.length === 0) {
        return alert("Tyhjä");
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
          Tyhjennä
        </button>
      </div>
    );
  }
}
