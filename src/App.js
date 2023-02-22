import Map from "./components/Map";
import { useEffect, useState } from "react";
import Table from "./components/Table";
import "./components/Map.css";

function App() {
  const [showMainlines, setShowMainlines] = useState(false);
  const [showParkWalks, setShowParkWalks] = useState(false);
  const [tableData, setTableData] = useState(null);
  const [comparisonOne, setComparisonOne] = useState(null);
  const [comparisonTwo, setComparisonTwo] = useState(null);

  return (
    <div className="App">
      <h2>Practicing with Leaflet</h2>
      <div className="map-and-table">
        <div className="map-and-btns">
          <div className="buttons-container">
            <button onClick={() => setShowMainlines(!showMainlines)}>
              Mainlines
            </button>
            <button onClick={() => setShowParkWalks(!showParkWalks)}>
              Park Walks
            </button>
          </div>
          <Map
            showMainlines={showMainlines}
            showParkWalks={showParkWalks}
            setTableData={setTableData}
            comparisonOne={comparisonOne}
            setComparisonOne={setComparisonOne}
            comparisonTwo={comparisonTwo}
            setComparisonTwo={setComparisonTwo}
          />
        </div>
        <Table tableData={tableData} />
      </div>
    </div>
  );
}

export default App;
