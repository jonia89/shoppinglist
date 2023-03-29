import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import List from "../components/list";
import Left from "../components/itemsLeft";
import Icon from "../components/Icon";

export default function Listpage() {
  return (
    <div>
      <Add onChange={useState()}/>
      <Left onChange={useState()}/>
      <List onChange={useState()}/>
      <Icon />
    </div>
  );
}
