import Map from "./components/Map";
import { useState } from "react";

function App() {
  const [showMainlines, setShowMainlines] = useState(true);
  const [showParkWalks, setShowParkWalks] = useState(true);

  return (
    <div className="App">
      <div className="buttons-container">
        <button onClick={() => setShowMainlines(!showMainlines)}>
          Mainlines
        </button>
        <button onClick={() => setShowParkWalks(!showParkWalks)}>
          Park Walks
        </button>
      </div>
      <div className="container-map">
        <Map showMainlines={showMainlines} showParkWalks={showParkWalks} />
      </div>
    </div>
  );
}

export default App;
