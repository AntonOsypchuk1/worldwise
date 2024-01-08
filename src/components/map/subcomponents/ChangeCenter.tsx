import { FC, PropsWithChildren } from "react";
import { useMap } from "react-leaflet";
import { LatLngExpression } from "leaflet";

const ChangeCenter: FC<
  PropsWithChildren<{
    position: LatLngExpression;
  }>
> = ({ position }) => {
  const map = useMap();
  map.setView(position);
  return null;
};

export default ChangeCenter;
