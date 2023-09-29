export default function New(props) {
  const barStyle = {
    display: "flex",
    padding: "20px",
    alignItems: "center",
    justifyContent: "center",
    background: "gray",
  };
  const buttonStyle = {
    margin: "20px",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "yellow",
    color: "green",
  };

  return (
    <div className="New">
      <form style={barStyle}>
        <input className="'New-item" placeholder="Kirjoita tuote" type="text" />
        <button style={buttonStyle} type="submit" onClick={props.addItem}>
          Lisää
        </button>
      </form>
    </div>
  );
}
