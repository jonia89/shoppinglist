import React, { Component } from "react";
import { items, checked } from "../App";

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
      checked: [...checked],
    };
  }

  addItem = (event) => {
    let newItem =
      this.inputElement.value.trim().charAt(0).toUpperCase() +
      this.inputElement.value.trim().slice(1);
    if (newItem.length === 0) {
      return alert("Tuotekenttä tyhjä, syötä tuote");
    } else if (newItem.length < 3 && newItem.length > 0) {
      return alert("Eipä taida olla tollaista tuotetta");
    } else if (this.state.items.includes(newItem)) {
      return alert(newItem + " on jo listalla");
    } else if (this.state.checked.includes(newItem)) {
      return alert(newItem + " on jo ostoskorissa");
    }
    this.state.items.push(newItem);
    this.state.items.sort((a, b) => a - b);
    this.inputElement.value = "";
    console.log(this.state.items);
    return this.state.items;
  };
  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <React.Fragment>
        <div className="New">
          <form
            style={this.barStyle}
            onSubmit={(event) => this.onSubmit(event)}
          >
            <input
              ref={(item) => (this.inputElement = item)}
              className="'New-item"
              placeholder="Kirjoita tuote"
              type="text"
              onChange={(event) => this.setState({ item: event.target.value })}
            />
            <button
              style={this.buttonStyle}
              type="submit"
              onClick={this.addItem}
            >
              Lisää
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
