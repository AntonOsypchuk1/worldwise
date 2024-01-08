import geoJson from "../../server/bounding_boxes.json";
import { LatLngBoundsLiteral } from "leaflet";

export const getCountryBoundingBox = (
  countryCode: string | null,
): LatLngBoundsLiteral | null => {
  if (!countryCode) return null;

  const res = JSON.stringify(geoJson);
  const bounds = JSON.parse(res)[countryCode][1];

  return [
    [bounds[1], bounds[0]],
    [bounds[3], bounds[2]],
  ];
};
