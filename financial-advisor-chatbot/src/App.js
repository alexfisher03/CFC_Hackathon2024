import logo from "./logo.svg";
import "./App.css";
import React from 'react';
import HomePage from './components/HomePage';
import ReactDOM from 'react-dom/client';
//import logo1 from "./assets/name"

function App() {
  return (
  <div className="App">
    <HomePage />
    <MyForm />
  </div>
  );
}
function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

export default App;
