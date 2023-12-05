import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rootpage from "./pages/rootPage";
import Listpage from "./pages/listPage";
import Addpage from "./pages/addPage";

const mock_items = [
  {
    item: "Kaljaa",
    checked: true,
    id: Math.random().toString(),
  },
  { item: "sipsiä", checked: false, id: Math.random().toString() },
];

export default function App() {
  const [items, setItems] = useState(mock_items);

  const addItemHandler = (item) => {
    setItems((prevItems) => {
      return [item, ...prevItems];
    });
  };

  /*

 

  const deleteItem = (item) => {
    const allItems = [...items];
    const newState = allItems.filter((i) => i !== item);
    return newState;
  };
*/
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Rootpage items={items} />} />
          <Route path="/list" element={<Listpage items={items} />} />

          <Route
            path="/add"
            element={<Addpage items={items} addItemHandler={addItemHandler} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
