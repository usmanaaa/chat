import logo from "./logo.svg";
import React, { useRef } from "react";
import "./App.css";
import { Background } from "./components/Background/Background";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
