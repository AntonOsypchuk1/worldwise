import React, {FC, PropsWithChildren} from 'react';
import {useMap} from "react-leaflet";

const ChangeCenter: FC<PropsWithChildren<{
    position: number[]
  }>
> = ({position}) => {
  const map = useMap();
  map.setView(position);
  return null;
}

export default ChangeCenter;