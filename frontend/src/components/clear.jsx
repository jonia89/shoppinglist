import React, { Component } from "react";

export default class Clear extends Component {
  render() {
    return (
      <div>
        <button
          onDoubleClick={this.props.clearAll}
          className="btn btn-danger btn-m m-2"
        >
          Tyhjennä tuplaklikkaamalla
        </button>
      </div>
    );
  }
}
