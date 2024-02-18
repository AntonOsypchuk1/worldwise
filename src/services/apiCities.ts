import { ICity, INewCity } from "@/types/city.interface";
import { getApiUrl } from "@/utils/getApiUrl";

const apiUrl = getApiUrl();

export async function getCities(): Promise<Array<ICity>> {
  let data;

  try {
    const res = await fetch(`${apiUrl}/cities`);
    data = await res.json();
  } catch (e) {
    throw new Error("There is an error loading data");
  }

  return data;
}

export async function getCity(id: number): Promise<ICity> {
  let data;

  try {
    const res = await fetch(`${apiUrl}/cities`);
    data = await res.json();
    data = data.find((city: ICity) => city.id === id);
  } catch (e) {
    throw new Error("City could not be found.");
  }

  return data;
}

export async function addCity(newCity: INewCity) {
  try {
    await fetch(`${apiUrl}/cities`, {
      method: "POST",
      body: JSON.stringify(newCity),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    throw new Error("There is an error adding the city.");
  }
}

export async function deleteCity(id: number) {
  try {
    await fetch(`${apiUrl}/cities/${id}`, {
      method: "DELETE",
    });
  } catch {
    throw new Error("There is an error deleting the city.");
  }
}
