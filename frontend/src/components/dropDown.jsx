import { useState } from "react";

const Dropdown = (item) => {
  const items = useState([]);
  const checked = useState([]);
    console.log("tiputtaa", item);
    items.pop(item);
    checked.push(item);
    console.log(items);
    console.log(checked);
    return [...items, ...checked];
  };
  export default Dropdown