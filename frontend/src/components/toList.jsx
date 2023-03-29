import React, { Component } from "react";
import { Link } from "react-router-dom";
import Listpage from "../pages/listPage";

export default class Back extends Component {
  buttonStyle = {
    display: "flex",
    margin: "50px",
    padding: "20px",
    background: "blue",
    color: "white",
  };
  render() {
    return (
      <Link to="/list" onClick={Listpage}>
        <div>
          <button
            type="button"
            style={this.buttonStyle}
            className="btn btn-secondary sm"
          >
            Ostoslistaan
          </button>
        </div>
      </Link>
    );
  }
}
