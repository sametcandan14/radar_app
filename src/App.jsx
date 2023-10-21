import { useState } from "react";
import ListView from "./pages/ListView";
import MapView from "./pages/MapView";
import Header from "./components/Header";

function App() {
  const [showMapView, setShowMapView] = useState(true);
  return (
    <>
      <Header />
      <div className="view-buttons">
        <button
          className={showMapView && "active"}
          onClick={() => setShowMapView(true)}
        >
          Map View
        </button>
        <button
          className={!showMapView && "active"}
          onClick={() => setShowMapView(false)}
        >
          List View
        </button>
      </div>
      {showMapView ? <MapView /> : <ListView />}
    </>
  );
}

export default App;
