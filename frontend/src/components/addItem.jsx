import React, { Component } from "react";
import items from "../items";

export default class New extends Component {
  barStyle = {
    display: "flex",
    padding: "20px",
    alignItems: "center",
    justifyContent: "center",
    background: "gray",
  };
  buttonStyle = {
    margin: "20px",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "yellow",
    color: "green",
  };
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.state = {
      items: [...items],
    };
  }

  addItem = (item) => {
    if (this.inputElement.value !== "" && this.inputElement.value.length > 2) {
      let newItem = this.inputElement.value;
      this.state.items.push(newItem);
      this.state.items.sort((a, b) => a - b);
      this.inputElement.value = "";
      console.log(this.state.items);
      item.preventDefault();
      return this.state.items;
    } else if (
      this.inputElement.value.length < 3 &&
      this.inputElement.value.length > 0
    ) {
      return alert("Eipä taida olla tollaista tuotetta");
    } else {
      if (this.inputElement.value === "");
      return alert("Tuotekenttä on tyhjä! Syötä tuote");
    }
  };

  render() {
    return (
      <div className="New">
        <form style={this.barStyle} onSubmit={this.addItem}>
          <input
            ref={(item) => (this.inputElement = item)}
            className="'New-item"
            placeholder="Kirjoita tuote"
            type="text"
          />
          <button
            style={this.buttonStyle}
            type="submit"
          >
            Lisää
          </button>
        </form>
      </div>
    );
  }
}
export { items };
