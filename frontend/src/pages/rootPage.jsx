import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Counter from "../components/counter";
import Icon from "../components/Icon";

export default function Rootpage() {
  return (
    <div>
      <Counter onChange={useState()} />
      <Back />
      <Icon />
    </div>
  );
}
