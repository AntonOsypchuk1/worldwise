import { useSearchParams } from "next/navigation";
import { IPosition } from "@/types/city.interface";

export function useUrlPosition(): IPosition {
  const searchParams = useSearchParams();
  const lat = Number(searchParams.get("lat"));
  const lng = Number(searchParams.get("lng"));

  return { lat, lng };
}
