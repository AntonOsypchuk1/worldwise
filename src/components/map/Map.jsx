import React, {useState} from 'react';
import styles from './Map.module.css'
import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import ChangeCenter from "@/components/map/subcomponents/ChangeCenter";
import DetectClick from "@/components/map/subcomponents/DetectClick";
// import DetectClick from "@/components/map/subcomponents/DetectClick";

const Map = () => {
  const {cities} = useCities();
  const [mapPosition, setMapPosition] = useState([51.505, -0.09])

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={8}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={mapPosition} />
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <DetectClick/>
      </MapContainer>
    </div>
  );
};

// function DetectClick() {
//   const navigate = useNavigate();
//
//   useMapEvents({
//     click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
//   });
// }

export default Map;