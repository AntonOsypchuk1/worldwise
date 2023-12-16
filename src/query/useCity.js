import {useQuery} from "@tanstack/react-query";
import {API_URL} from "../../config";

async function getCity(id) {
  let data;

  try {
    const res = await fetch(`${API_URL}/cities`);
    data = await res.json();
    data = data.find(
      city => city.id === id
    );
  } catch (e) {
    throw new Error("City could not be found.")
  }

  return data;
}

export function useCity(cityId) {
  const {isLoading, data: city, error} = useQuery({
    queryKey: ["cities", cityId],
    queryFn: () => getCity(cityId),
    retry: false
  })

  return {city, isLoading, error};
}