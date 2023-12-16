import {useQuery} from "@tanstack/react-query";
import {API_URL} from "../../config";

async function getCities() {
  let data;

  try {
    const res = await fetch(`${API_URL}/cities`);
    data = await res.json();
  } catch (e) {
    throw new Error("There is an error loading data")
  }

  return data;
}

export function useCities() {
  const {isLoading, data: cities} = useQuery({
    queryKey: ["cities"],
    queryFn: getCities,
  })

  return {cities, isLoading};
}