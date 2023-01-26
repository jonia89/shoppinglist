import { BrowserRouter, Route, Routes } from "react-router-dom";
import Listpage from "./pages/listPage";
import Addpage from "./pages/addPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Listpage />} />

        <Route path="/add" element={<Addpage />} />
      </Routes>
    </BrowserRouter>
  );
}
