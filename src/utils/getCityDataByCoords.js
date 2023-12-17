import toast from "react-hot-toast";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

export async function getCityDataByCoords(lat, lng) {
  if (!lat && !lng) return;

  let data;

  const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
  data = await res.json();
  const { city, countryCode } = data;
  // console.log(city, countryCode)

  if (!countryCode)
    toast.error(
      "That doesn't seem to be a city. Click somewhere else 😜",
    );

  return { city, countryCode };
}