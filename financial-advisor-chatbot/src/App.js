import logo from "./logo.svg";
import "./App.css";

function MyForm() {
  return (
    <form>
      <label>
        Enter your name:
        <input type="text" />
      </label>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

export default App;
