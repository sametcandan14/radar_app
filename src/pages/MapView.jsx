import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css"

const MapView = () => {
  return (
    <div>
      <MapContainer center={[38.73122,35.478729]} zoom={7} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[38.73122,35.478729]}>
          <Popup>Merhabalar</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
