//import logo from "../logo.png";
import ostoskärryt from "../ostoskärryt.jpg";
import "../Icon.css";

export default function Icon() {
  return (
    <div className="Icon">
      <header className="Icon-header">
        <img src={ostoskärryt} className="Icon-logo" alt="logo" />
      </header>
    </div>
  );
}
