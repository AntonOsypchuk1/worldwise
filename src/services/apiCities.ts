import { API_URL } from "../../config";
import { ICity } from "@/types/city.interface";

export async function getCities(): Promise<Array<ICity>> {
  let data;

  try {
    const res = await fetch(`${API_URL}/cities`);
    data = await res.json();
  } catch (e) {
    throw new Error("There is an error loading data");
  }

  return data;
}

export async function getCity(id: number): Promise<ICity> {
  let data;

  try {
    const res = await fetch(`${API_URL}/cities`);
    data = await res.json();
    data = data.find((city: ICity) => city.id === id);
  } catch (e) {
    throw new Error("City could not be found.");
  }

  return data;
}

export async function addCity(newCity: ICity) {
  try {
    await fetch(`${API_URL}/cities`, {
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
    await fetch(`${API_URL}/cities/${id}`, {
      method: "DELETE",
    });
  } catch {
    throw new Error("There is an error deleting the city.");
  }
}
