import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Counter from "../components/counter";
import Icon from "../components/Icon";

const Rootpage = () => {
  const buttonStyle = {
    display: "flex",
    margin: "50px",
    padding: "20px",
    background: "blue",
    color: "white",
  };
  const rootPage = () => {
    return;
  };

  return (
    <div>
      <Counter />
      <Link to="/list" onClick={rootPage()}>
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

      <Counter />

      <Icon />
    </div>
  );
};

export default Rootpage;
