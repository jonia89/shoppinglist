import React, { Component } from "react";
import { items, checked } from "../App";

export default class Left extends Component {
  textStyle = {
    fontSize: "25px",
    color: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  constructor(props) {
    super(props);

    this.state = {
      items: [...items],
      checked: [...checked]
    };
  }
  leftToGo = () => {
    if (this.state.items.length === 0 && this.state.checked.length > 0)
      return "Kaikki ostokset hoidettu, on aika suunnata kassalle";
    else if (this.state.items.length === 1)
      return (
        "Vielä " +
        this.state.items.length +
        " \ntuote jäljellä"
      );
    else if (this.state.items.length > 1)
      return (
        "Vielä " + this.state.items.length + " \ntuotetta jäljellä"
      );
      else if (this.state.items.length + this.state.checked.length === 0)
      return ("Siirry muokkaamaan listaa")
    else if (this.state.items.length < 0)
      return "Nyt on jotain pahasti pielessä";
  };

  render() {
    return (
      <div>
        <span style={this.textStyle} className="badge badge-primary m-5">
          {this.leftToGo()}
        </span>
      </div>
    );
  }
}
