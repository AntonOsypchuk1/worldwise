"use client";

import { useCities } from "@/services/CityQueries/useCities";
import { Marker, Popup } from "react-leaflet";
import DetectClick from "@/components/map/subcomponents/DetectClick";

const Map = () => {
  const { cities, isLoading } = useCities();

  if (isLoading) return null;

  return (
    <>
      {cities?.map((city) => (
        <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
          <Popup>
            <span>{city.emoji}</span> <span>{city.cityName}</span>
          </Popup>
        </Marker>
      ))}
      <DetectClick />
    </>
  );
};

export default Map;
