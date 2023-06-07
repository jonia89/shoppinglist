import React, { Component } from "react";

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

  
  render() {
    return (
      <div className="New">
        <form style={this.barStyle}>
          <input
            className="'New-item"
            placeholder="Kirjoita tuote"
            type="text"
          />
          <button style={this.buttonStyle} type="submit" onClick={this.props.addItem}>
            Lisää
          </button>
        </form>
      </div>
    );
  }
}
