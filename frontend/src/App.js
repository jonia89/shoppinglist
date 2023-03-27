import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rootpage from "./pages/rootPage";
import Listpage from "./pages/listPage";
import Addpage from "./pages/addPage";

export default function App() {
 const [items, addItem] = useState([])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rootpage />} />
        <Route path="/list" element={<Listpage />} />

        <Route path="/add" element={<Addpage />} />
      </Routes>
    </BrowserRouter>
  );
}
