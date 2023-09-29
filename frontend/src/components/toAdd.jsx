import { Link } from "react-router-dom";
import Addpage from "../pages/addPage";

export default function Add() {
  const buttonStyle = {
    display: "flex",
    margin: "50px",
    padding: "20px",
    background: "blue",
    color: "white",
  };

  return (
    <Link to="/add" onClick={Addpage}>
      <div>
        <button
          style={buttonStyle}
          type="button"
          className="btn btn-secondary sm"
        >
          Muokkaamaan ostoslistaa
        </button>
      </div>
    </Link>
  );
}
