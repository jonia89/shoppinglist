import React, { Component } from "react";
import checked from "../checked";
import items from "../items";

export default class Clearchecked extends Component {
  constructor() {
    super();
    this.clearChecked.bind(this);
  }

  clearChecked = () => {
    console.log("Poistaa jo ostetut");
    console.log(items, checked);
    const areYouSure = prompt("Oletko varma? (kirjoita kyllä vahvistaaksesi)");
    if (areYouSure === "kyllä") {
      while (checked.length > 0) {
        checked.pop();
      }
      if (checked.length === 0) {
        console.log(items, checked);
        return alert("Ostetut poistettu");
      } else {
        return items && checked;
      }
    }
  };
  render() {
    return (
      <div>
        <button
          onDoubleClick={this.clearChecked}
          className="btn btn-danger btn-m m-2"
        >
          Poista valmiit tuplaklikkaamalla
        </button>
      </div>
    );
  }
}
