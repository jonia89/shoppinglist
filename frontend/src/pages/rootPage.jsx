import React, { useState } from "react";
import "../App.css";
import Back from "../components/toList";
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
