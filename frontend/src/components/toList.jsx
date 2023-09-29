import { Link } from "react-router-dom";
import Listpage from "../pages/listPage";

export default function Back() {
  const buttonStyle = {
    display: "flex",
    margin: "50px",
    padding: "20px",
    background: "blue",
    color: "white",
  };

  return (
    <Link to="/list" onClick={Listpage}>
      <div>
        <button
          type="button"
          style={buttonStyle}
          className="btn btn-secondary sm"
        >
          Ostoslistaan
        </button>
      </div>
    </Link>
  );
}
