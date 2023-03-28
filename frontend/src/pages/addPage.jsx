import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Manage from "../components/manage";
import Counter from "../components/counter";
import New from "../components/addItem";
import Icon from "../components/Icon";
import Clear from "../components/clear";
import Clearchecked from "../components/clearChecked";

const Addpage = () => {
  const clearStyle = {
    display: "flex",
    direction: "row",
  };
  const buttonStyle = {
    display: "flex",
    margin: "50px",
    padding: "20px",
    background: "blue",
    color: "white",
  };

  const listPage = () => {
    return;
  };

  return (
    <div>
      <Link to="/list" onClick={listPage()}>
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
      <New />
      <Manage />
      <Counter />
      <div style={clearStyle}>
        <Clearchecked />
        <Clear />
      </div>
      <Icon />
    </div>
  );
};

export default Addpage;
