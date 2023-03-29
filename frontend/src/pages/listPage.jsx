import React, { useState } from "react";
import "../App.css";
import Add from "../components/toAdd";
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
