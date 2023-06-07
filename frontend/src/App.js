import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rootpage from "./pages/rootPage";
import Listpage from "./pages/listPage";
import Addpage from "./pages/addPage";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    items: ["Kaljaa"],
    checked: ["Sipsiä"],
  };

  countObjects = () => {
    const counted = this.state.items.length + this.state.checked.length;
    this.setState({ counted });
  };

  itemsLeft = () => {
    const counted = this.state.items.length + this.state.checked.length;
    if (this.state.items.length === 0 && this.state.checked.length > 0)
      return "Kaikki ostokset hoidettu, on aika suunnata kassalle";
    else if (this.state.items.length === 1)
      return "Vielä " + this.state.items.length + " \ntuote jäljellä";
    else if (this.state.items.length > 1)
      return "Vielä " + this.state.items.length + " \ntuotetta jäljellä";
    else if (this.state.items.length + this.state.checked.length === 0)
      return "Siirry muokkaamaan listaa";
    else if (this.state.items.length < 0)
      return "Nyt on jotain pahasti pielessä";
    this.setState({ counted });
  };

  liftUp = (item) => {
    const items = this.state.items;
    const checked = this.state.checked;
    item = checked.splice(checked.indexOf(item));
    items.push(item);
    const newState = [...items, ...checked];
    this.setState({ newState });
  };

  dropDown = (item) => {
    const items = this.state.items;
    const checked = this.state.checked;
    item = items.splice(items.indexOf(item));
    checked.push(item);
    const newState = [...items, ...checked];
    this.setState({ newState });
  };

  addItem = (newItem) => {
    const items = this.state.items;
    const checked = this.state.checked;
    newItem =
      this.state.inputElement.value.trim().charAt(0).toUpperCase() +
      this.state.inputElement.value.trim().slice(1);
    items.push(newItem);
    newItem.preventDefault();
    this.inputElement.value = "";
    const newState = [...items, ...checked];
    this.setState({ newState });
  };

  deleteItem = (item) => {
    const allItems = [...this.state.items, ...this.state.checked];
    const newState = allItems.filter((i) => i !== item);
    this.setState({ newState });
  };

  clearAll = () => {
    const areYouSure = prompt("Oletko varma? (kirjoita kyllä vahvistaaksesi)");
    const newState = [...this.state.items, this.state.checked];
    if (areYouSure === "kyllä") {
      while (newState.length > 0) {
        newState.pop();
      }
      if (newState.length === 0) {
        return alert("Lista tyhjennetty");
      } else {
        return newState;
      }
    }
    this.setState({ newState });
  };

  clearChecked = () => {
    const checked = this.state.checked;
    const newState = [...this.state.items, ...checked];
    const areYouSure = prompt("Oletko varma? (kirjoita kyllä vahvistaaksesi)");
    if (areYouSure === "kyllä") {
      while (checked.length > 0) {
        checked.pop();
      }
      if (checked.length === 0) {
        return alert("Ostetut poistettu");
      } else {
        return newState;
      }
    }
    this.setState({ newState });
  };

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Rootpage
                  items={this.state.items}
                  checked={this.state.checked}
                  countObjects={this.countObjects}
                />
              }
            />
            <Route
              path="/list"
              element={
                <Listpage
                  items={this.state.items}
                  checked={this.state.checked}
                  itemsLeft={this.itemsLeft}
                  dropDown={this.dropDown}
                  liftUp={this.liftUp}
                />
              }
            />

            <Route
              path="/add"
              element={
                <Addpage
                  items={this.state.items}
                  checked={this.state.checked}
                  countObjects={this.countObjects}
                  addItem={this.addItem}
                  deleteItem={this.deleteItem}
                  clearAll={this.clearAll}
                  clearChecked={this.clearChecked}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
