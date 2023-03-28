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
import addItem from "./components/addItem";
import clearAll from "./components/clearAll";
import clearChecked from "./components/clearChecked";
import countObjects from "./components/countObjects";
import dropDown from "./components/dropDown";
import handleDelete from "./components/handleDelete";
import leftToGo from "./components/leftToGo";
import liftUp from "./components/liftUp";

const items = [];
const checked = [];

const Home = () => (
  <div>
    <div>
      <span style={textStyle} className="badge badge-primary m-5">
        {countObjects}
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
        {leftToGo}
      </span>
    </div>
    <div className="item-list">
      <span style={itemListStyle}>
        <ul>
          {this.items.map((item) => (
            <li key={item}>
              {item}
              <Checkbox onChange={dropDown} color="success" />
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
                onChange={liftUp}
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
      <form style={barStyle} onSubmit={addItem}>
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
                onClick={handleDelete}
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
                onClick={handleDelete}
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
        {countObjects}
      </span>
    </div>
    <div style={clearStyle}>
      <div>
        <button
          onDoubleClick={clearChecked}
          className="btn btn-danger btn-m m-2"
        >
          Poista valmiit tuplaklikkaamalla
        </button>
      </div>
      <div>
        <button onDoubleClick={clearAll} className="btn btn-danger btn-m m-2">
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
  const items = useState([]);
  const checked = useState([]);

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
export { items, checked };
export default App;
