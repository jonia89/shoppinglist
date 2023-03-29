import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Manage from "../components/manage";
import Counter from "../components/counter";
import New from "../components/addItem";
import Icon from "../components/Icon";
import Clear from "../components/clear";
import Clearchecked from "../components/clearChecked";

export default function Addpage() {
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

    return (
      <div>
        <Back onChange={useState()}/>
        <New onChange={useState()}/>
        <Manage onChange={useState()}/>
        <Counter onChange={useState()}/>
        <div style={clearStyle}>
          <Clearchecked onChange={useState()}/>
          <Clear onChange={useState()}/>
      </div>
      <Icon />
    </div>
  );
};

