import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rootpage from "./pages/rootPage";
import Listpage from "./pages/listPage";
import Addpage from "./pages/addPage";


const items = ["Aimovig", "Bufomix", "Candesartan", "Amlodipin", "Paradontax"].sort();
const checked = [].sort();

export default function App() {
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

export { items, checked };
