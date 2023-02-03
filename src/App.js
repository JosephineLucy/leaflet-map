import Map from "./components/Map";
import { useState } from "react";
import Table from "./components/Table";

function App() {
  const [showMainlines, setShowMainlines] = useState(true);
  const [showParkWalks, setShowParkWalks] = useState(true);
  const [tableData, setTableData] = useState(null);

  console.log(tableData, "<<<<tableData");
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
          />
        </div>
        <Table tableData={tableData} />
      </div>
    </div>
  );
}

export default App;
