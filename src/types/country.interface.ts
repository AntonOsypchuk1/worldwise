import { ICity } from "@/types/city.interface";

export interface INewCountry {
  // countryName: string;
  // countryCode: string;
  country: string;
  emoji: string;
  cityList?: Array<ICity>;
}

export interface ICountry extends INewCountry {
  id: number;
}
