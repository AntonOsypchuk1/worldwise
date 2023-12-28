"use client";

import { FC, PropsWithChildren, useEffect, useState } from "react";
import styles from "@/components/map/Map.module.css";
import Button from "@/components/ui/button/Button";
import { MapContainer, TileLayer } from "react-leaflet";
import ChangeCenter from "@/components/map/subcomponents/ChangeCenter";
import { useGeolocation } from "@/hooks/useGeolocation";
import { useUrlPosition } from "@/hooks/useURLPosition";

const EmptyMap: FC<PropsWithChildren> = ({ children }) => {
  const [mapPosition, setMapPosition] = useState<[number, number]>([
    51.505, -0.09,
  ]);

  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();
  const { lat: mapLat, lng: mapLng } = useUrlPosition();

  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geolocationPosition)
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
  }, [geolocationPosition]);

  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading..." : "Use your position"}
        </Button>
      )}
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
        {children}
        <ChangeCenter position={mapPosition} />
      </MapContainer>
    </div>
  );
};

export default EmptyMap;
