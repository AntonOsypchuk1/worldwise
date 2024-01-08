import { ICity } from "@/types/city.interface";
import { LatLngBounds } from "leaflet";

export interface INewCountry {
  countryName: string;
  countryCode: string;
  emoji: string;
  cityList?: Array<ICity>;
  bounds?: LatLngBounds;
}

export interface ICountry extends INewCountry {
  id: number;
}
