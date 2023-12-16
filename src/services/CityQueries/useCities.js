import {useQuery} from "@tanstack/react-query";
import {getCities} from "worldwise/src/services/apiCities";

export function useCities() {
  const {isLoading, data: cities} = useQuery({
    queryKey: ["cities"],
    queryFn: getCities,
  })

  return {cities, isLoading};
}