import { useState } from "react";

const Liftup = (item) => {
  const items = useState([]);
  const checked = useState([]);
  console.log("nostaa", item);
  checked.pop(item);
  items.push(item);
  console.log(items);
  console.log(checked);
  return [...items, ...checked];
};
export default Liftup;
