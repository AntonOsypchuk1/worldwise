import { useMapEvents } from "react-leaflet";
import { useRouter } from "next/navigation";

const DetectClick = () => {
  const router = useRouter();

  useMapEvents({
    click: (e: { latlng: { lat: any; lng: any } }) =>
      router.push(`/form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });

  return null;
};

export default DetectClick;
