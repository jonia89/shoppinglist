import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import "./App.css";
import "./Icon.css";
import ostoskärryt from "./ostoskärryt.jpg";
import {
  clearStyle,
  buttonStyle,
  listStyle,
  textStyle,
  barStyle,
  addButtonStyle,
  itemListStyle,
  leftToTextStyle,
} from "./styles";

//const items = [];
//const checked = [];

const Home = () => (
  <div>
    <div>
      <span style={textStyle} className="badge badge-primary m-5">
        {this.state.countObjects}
      </span>
    </div>
    <Link to="/list">
      <div>
        <button
          type="button"
          style={buttonStyle}
          className="btn btn-secondary sm"
        >
          Ostoslistaan
        </button>
      </div>
    </Link>
    <div className="Icon">
      <header className="Icon-header">
        <img src={ostoskärryt} className="Icon-logo" alt="logo" />
      </header>
    </div>
  </div>
);
const List = () => (
  <div>
    <Link to="/add">
      <div>
        <button
          style={buttonStyle}
          type="button"
          className="btn btn-secondary sm"
        >
          Muokkaamaan ostoslistaa
        </button>
      </div>
    </Link>
    <div>
      <span style={leftToTextStyle} className="badge badge-primary m-5">
        {this.state.leftToGo}
      </span>
    </div>
    <div className="item-list">
      <span style={itemListStyle}>
        <ul>
          {this.items.map((item) => (
            <li key={item}>
              {item}
              <Checkbox onChange={this.state.dropDown} color="success" />
            </li>
          ))}
        </ul>
      </span>
      <span style={listStyle}>
        <ul>
          {this.state.checked.map((item) => (
            <li key={item}>
              {item}
              <Checkbox
                onChange={this.state.liftUp}
                defaultChecked={true}
                color="success"
              />
            </li>
          ))}
        </ul>
      </span>
    </div>
    <div className="Icon">
      <header className="Icon-header">
        <img src={ostoskärryt} className="Icon-logo" alt="logo" />
      </header>
    </div>
  </div>
);
const Add = () => (
  <div>
    <Link to="/list">
      <div>
        <button
          type="button"
          style={buttonStyle}
          className="btn btn-secondary sm"
        >
          Ostoslistaan
        </button>
      </div>
    </Link>
    <div className="New">
      <form style={barStyle}>
        <input
          ref={(item) => (this.inputElement = item)}
          className="'New-item"
          placeholder="Kirjoita tuote"
          type="text"
        />
        <button
          style={addButtonStyle}
          type="submit"
          onClick={(this.setState = () => this.state)}
        >
          Lisää
        </button>
      </form>
    </div>
    <div>
      <span style={listStyle}>
        <ul>
          {this.items.map((item) => (
            <li key={item}>
              {item}
              <button
                onClick={this.state.handleDelete}
                className="btn btn-danger btn-sm m-2"
              >
                Poista
              </button>
            </li>
          ))}
        </ul>
        <ul>
          {this.checked.map((item) => (
            <li key={item}>
              {item}
              <button
                onClick={this.state.handleDelete}
                className="btn btn-danger btn-sm m-2"
              >
                Poista
              </button>
            </li>
          ))}
        </ul>
      </span>
    </div>
    <div>
      <span style={textStyle} className="badge badge-primary m-5">
        {this.state.countObjects}
      </span>
    </div>
    <div style={clearStyle}>
      <div>
        <button
          onDoubleClick={this.state.clearChecked}
          className="btn btn-danger btn-m m-2"
        >
          Poista valmiit tuplaklikkaamalla
        </button>
      </div>
      <div>
        <button onDoubleClick={this.state.clearAll} className="btn btn-danger btn-m m-2">
          Tyhjennä tuplaklikkaamalla
        </button>
      </div>
    </div>
    <div className="Icon">
      <header className="Icon-header">
        <img src={ostoskärryt} className="Icon-logo" alt="logo" />
      </header>
    </div>
  </div>
);

const App = () => {
  const [items, checked] = useState([]);
  const addItem = (item) => {
    const newItem =
      this.inputElement.value.charAt(0).toUpperCase() +
      this.inputElement.value.slice(1);
  
    if (this.inputElement.value !== "" && this.inputElement.value.length > 2) {
      this.state.items.push(newItem);
      items.sort((a, b) => a - b);
      this.inputElement.value = "";
      console.log(items);
      item.preventDefault();
      return items;
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
  const clearAll = () => {
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
  const clearChecked = () => {
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
  const countObjects = () => {
    if (items.length + checked.length === 0) return "Ostoslista on tyhjä";
    else if (items.length + checked.length === 1)
      return "Ostoslistalla on " + (items.length + checked.length) + " tuote";
    return "Ostoslistalla on " + (items.length + checked.length) + " tuotetta";
  };
  const dropDown = (item) => {
    console.log("tiputtaa", item);
    items.pop(item);
    checked.push(item);
    console.log(items);
    console.log(checked);
    return [...items, ...checked];
  };
  const handleDelete = (item) => {
    console.log("Poistaa tuotteen", item);
    return items && checked;
  };
  const leftToGo = () => {
    if (items.length === 0 && checked.length > 0)
      return "Kaikki ostokset hoidettu, on aika suunnata kassalle";
    else if (items.length === 1)
      return "Vielä " + items.length + " \ntuote jäljellä";
    else if (items.length > 1)
      return "Vielä " + items.length + " \ntuotetta jäljellä";
    else if (items.length + checked.length === 0)
      return "Siirry muokkaamaan listaa";
    else if (items.length < 0) return "Nyt on jotain pahasti pielessä";
  };
  const liftUp = (item) => {
    console.log("nostaa", item);
    checked.pop(item);
    items.push(item);
    console.log(items);
    console.log(checked);
    return [...items, ...checked];
  };
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />

        <Route path="/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
