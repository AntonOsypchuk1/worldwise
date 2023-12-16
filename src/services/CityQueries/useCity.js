import {useQuery} from "@tanstack/react-query";
import {getCity} from "@/services/apiCities";

export function useCity(cityId) {
  const {isLoading, data: city, error} = useQuery({
    queryKey: ["cities", cityId],
    queryFn: () => getCity(cityId),
    retry: false
  })

  return {city, isLoading, error};
}