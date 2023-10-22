import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import SideDetail from "../components/SideDetail";

const MapView = () => {
  const store = useSelector((store) => store);
  return (
    <div>
      <SideDetail />
      <MapContainer
        center={[38.73122, 35.478729]}
        zoom={6}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {store?.flights.map((fly) => (
          <Marker position={[fly.lat, fly.lang]}>
            <Popup>
              <div className="popup">
                <span>Code: {fly.code}</span>
                <button>Detail</button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
