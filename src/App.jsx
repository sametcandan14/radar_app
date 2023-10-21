import { useState } from "react";
import ListView from "./pages/ListView";
import MapView from "./pages/MapView";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFlights } from "./redux/action";

function App() {
  const [showMapView, setShowMapView] = useState(true);
const dispatch= useDispatch();

useEffect(()=> {
  dispatch(getFlights())
},[])

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
