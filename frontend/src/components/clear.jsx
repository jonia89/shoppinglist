export default function Clear(props) {
  return (
    <div>
      <button
        onDoubleClick={props.clearAll}
        className="btn btn-danger btn-m m-2"
      >
        Tyhjennä tuplaklikkaamalla
      </button>
    </div>
  );
}
