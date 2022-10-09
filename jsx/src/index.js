import React from "react";
import ReactDOM from "react-dom";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

function App() {
  const inputType = "number";
  const minValue = 5;
  return (
    <h1>
      <input type={inputType} min={minValue} />
    </h1>
  );
}

root.render(<App />);
