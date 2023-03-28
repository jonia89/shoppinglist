import { items, checked } from "../App";

const liftUp = (item) => {
    console.log("nostaa", item);
    checked.pop(item);
    items.push(item);
    console.log(items);
    console.log(checked);
    return [...items, ...checked];
  };
  export default liftUp