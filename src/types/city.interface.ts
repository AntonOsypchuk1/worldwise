export interface INewCity {
  cityName: string;
  countryName: string;
  countryCode: string;
  emoji: string;
  date: string;
  notes: string;
  position: IPosition;
}

export interface ICity extends INewCity {
  id: number;
}

export interface IPosition {
  lat: number;
  lng: number;
}
