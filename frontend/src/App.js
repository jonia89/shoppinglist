import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rootpage from "./pages/rootPage";
import Listpage from "./pages/listPage";
import Addpage from "./pages/addPage";
const items = ["Pizza", "Leipä, ruis", "Maito"].sort();
const checked = ["Kaljaa", "Tonnikalaa", "Majoneesia"].sort();

export default class App extends Component {
  render() {
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
}
export { items, checked };
