import React, { Component } from "react";
import { items, checked } from "../App";

export default class Clearchecked extends Component {
  constructor(props) {
    super(props);
    this.clearChecked.bind(this);
    this.state = {
      items: [...items],
      checked: [...checked]
    }
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
