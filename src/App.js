import { useState } from "react";
import "./App.css";

function App() {
  const [colorState, setColorState] = useState({
    first: false,
    second: false,
    third: false,
  });

  const handleColorChange = (numberOfTile) => {
    if (numberOfTile === 1) {
      setColorState({
        ...colorState,
        first: !colorState.first,
      });
    }
    if (numberOfTile === 2) {
      setColorState({
        ...colorState,
        second: !colorState.second,
      });
    }
    if (numberOfTile === 3) {
      setColorState({
        ...colorState,
        third: !colorState.third,
      });
    }

    console.log(colorState);
  };

  return (
      <div className="App">
        <button className="btn" onClick={() => handleColorChange(1)}>
          {colorState.first ? "Hide" : "Reveal"}
        </button>
        <div
            className="mainContainer"
            style={{
              backgroundColor: colorState.first ? "blue" : "peru",
            }}
        >
          <h1>{colorState.first ? "ACTUALLY IM BLUE" : ""}</h1>
        </div>
        <button className="btn" onClick={() => handleColorChange(2)}>
          {colorState.second ? "Hide" : "Reveal"}
        </button>
        <div
            className="mainContainer"
            style={{
              backgroundColor: colorState.second ? "red" : "peru",
            }}
        >
          <h1>{colorState.second ? "ACTUALLY IM RED" : ""}</h1>
        </div>
        <button className="btn" onClick={() => handleColorChange(3)}>
          {colorState.third ? "Hide" : "Reveal"}
        </button>
        <div
            className="mainContainer"
            style={{
              backgroundColor: colorState.third ? "green" : "peru",
            }}
        >
          <h1>{colorState.third ? "ACTUALLY IM GREEN" : ""}</h1>
        </div>
      </div>
  );
}

export default App;
