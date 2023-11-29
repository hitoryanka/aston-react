function Content() {
  return (
    <div
      className="content"
      style={{ backgroundColor: "#CC00CC" }}
    >
      <label htmlFor="password">
        You can write your password here if you like..{" "}
      </label>
      <input
        type="password"
        name="password"
      />
    </div>
  );
}

const root = document.querySelector("#root");
ReactDOM.render(<Content />, root);
