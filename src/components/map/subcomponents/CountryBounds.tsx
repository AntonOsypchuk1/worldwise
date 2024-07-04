import { useEffect, useState } from "react";
import { Rectangle, useMap } from "react-leaflet";
import { LatLngBounds } from "leaflet";
import { getCountryBoundingBox } from "@/utils/getCountryBoundingBox";
import { useSearchParams } from "next/navigation";

const CountryBounds = () => {
  const [bounds, setBounds] = useState<LatLngBounds | null>(
    // new LatLngBounds([0, 0], [1, 1]),
    null
  );

  const map = useMap();

  const params = useSearchParams();
  const countryCode = params.get("code");

  useEffect(() => {
    const countryBoundingBox = getCountryBoundingBox(countryCode);
    if (countryBoundingBox)
      setBounds((bounds) => new LatLngBounds(countryBoundingBox));
  }, [countryCode]);

  useEffect(() => {
    if (bounds) {
      map.flyToBounds(bounds);
    }
  }, [bounds, map]);

  if (!bounds || !countryCode || countryCode === "") return null;

  return (
    <Rectangle bounds={bounds} fillColor="transparent" color="transparent" />
  );
};

export default CountryBounds;
