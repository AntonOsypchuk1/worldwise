import {useQuery, useQueryClient} from "@tanstack/react-query";
import {useSearchParams} from "next/navigation";
import {useEffect} from "react";

const BASE_URL = "http://localhost:8000";

async function getCities() {
  let data;

  try {
    const res = await fetch(`${BASE_URL}/cities`);
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