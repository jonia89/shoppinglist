import React, { Component } from "react";

export default class Clearchecked extends Component {

  render() {
    return (
      <div>
        <button
          onDoubleClick={this.clearChecked}
          className="btn btn-danger btn-m m-2"
        >
          Poista valmiit tuplaklikkaamalla
        </button>
      </div>
    );
  }
}
