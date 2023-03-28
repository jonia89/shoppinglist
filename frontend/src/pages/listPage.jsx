import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import List from "../components/list";
import Left from "../components/itemsLeft";
import Icon from "../components/Icon";

const Listpage = () => {
  const buttonStyle = {
    display: "flex",
    margin: "50px",
    padding: "20px",
    background: "blue",
    color: "white",
  };
  const addPage = () => {
    return;
  };

  return (
    <div>
      <Link to="/add" onClick={addPage()}>
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
      <Left />
      <List />
      <Icon />
    </div>
  );
};

export default Listpage;
