'use client'

import {useEffect, useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

import ChangeCenter from "@/components/map/subcomponents/ChangeCenter";
import DetectClick from "@/components/map/subcomponents/DetectClick";
import Spinner from "@/components/ui/spinner/Spinner";

import {useCities} from "@/services/CityQueries/useCities";
import {useGeolocation} from "@/hooks/useGeolocation";

import styles from './Map.module.css'
import {useUrlPosition} from "@/hooks/useURLPosition";

const Map = () => {
  const {cities, isLoading} = useCities();
  const [mapPosition, setMapPosition] = useState([51.505, -0.09])

  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition
  } = useGeolocation();
  const [mapLat, mapLng] = useUrlPosition()

  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  if (isLoading) return null

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
        <DetectClick/>
      </MapContainer>
    </div>
  );
};

export default Map;