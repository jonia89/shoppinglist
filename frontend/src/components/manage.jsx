import React, { Component } from "react";

export default class Manage extends Component {
  itemsStyle = {
    fontSize: "25px",
    margin: "10px",
    display: "flex",
  };
  checkedStyle = {
    fontSize: "25px",
    margin: "10px",
    display: "flex",
    color: "green",
  };

  renderItems = () => {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item}>
            {item}
            <button
              onClick={this.props.deleteItem}
              className="btn btn-danger btn-sm m-2"
            >
              Poista
            </button>
          </li>
        ))}
      </ul>
    );
  };

  renderChecked = () => {
    <ul>
      {this.props.checked.map((item) => (
        <li key={item}>
          {item}
          <button
            onClick={this.props.deleteItem}
            className="btn btn-danger btn-sm m-2"
          >
            Poista
          </button>
        </li>
      ))}
    </ul>;
  };

  render() {
    return (
      <React.Fragment>
        <div className="manage-items-List" style={this.itemsStyle}>
          <span>{this.renderItems}</span>
        </div>
        <div className="manage-checked-list" style={this.checkedStyle}>
          <span>{this.renderChecked}</span>
        </div>
      </React.Fragment>
    );
  }
}
