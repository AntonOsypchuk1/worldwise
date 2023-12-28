import toast from "react-hot-toast";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

export async function getCityDataByCoords(lat: number, lng: number) {
  if (!lat && !lng) return;

  const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
  const data = await res.json();

  if (!data.countryCode)
    toast.error("That doesn't seem to be a city. Click somewhere else 😜");

  return data;
}
