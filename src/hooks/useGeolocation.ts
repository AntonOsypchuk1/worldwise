import { useState } from "react";
import { IPosition } from "@/types/city.interface";

interface GeolocationHook {
  isLoading: boolean;
  position: IPosition | null;
  error: string | null;
  getPosition: () => void;
}

export function useGeolocation(
  defaultPosition: IPosition | null = null,
): GeolocationHook {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState<IPosition | null>(defaultPosition);
  const [error, setError] = useState<string | null>(null);

  function getPosition() {
    if (!navigator.geolocation) {
      setError("Your browser does not support geolocation");
      return;
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      },
    );
  }

  return { isLoading, position, error, getPosition };
}
