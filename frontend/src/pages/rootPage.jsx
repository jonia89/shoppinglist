import React, { useState } from "react";
import "../App.css";
import Counter from "../components/counter";
import Icon from "../components/Icon";
import Back from "../components/toList";

export default function Rootpage() {
  return (
    <div>
      <Counter onChange={useState()} />
      <Back />
      <Icon />
    </div>
  );
}
