import { items, checked } from "../App";

const dropDown = (item) => {
    console.log("tiputtaa", item);
    items.pop(item);
    checked.push(item);
    console.log(items);
    console.log(checked);
    return [...items, ...checked];
  };
  export default dropDown