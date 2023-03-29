import React, { Component } from "react";
import { Link } from "react-router-dom";
import Addpage from "../pages/addPage";

export default class Add extends Component {
  buttonStyle = {
    display: "flex",
    margin: "50px",
    padding: "20px",
    background: "blue",
    color: "white",
  };
  render() {
    return (
      <Link to="/add" onClick={Addpage}>
        <div>
          <button
            style={this.buttonStyle}
            type="button"
            className="btn btn-secondary sm"
          >
            Muokkaamaan ostoslistaa
          </button>
        </div>
      </Link>
    );
  }
}
