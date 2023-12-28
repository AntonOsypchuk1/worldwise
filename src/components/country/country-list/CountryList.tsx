import { useCities } from "@/services/CityQueries/useCities";
import Spinner from "../../ui/spinner/Spinner";
import Message from "../../ui/message/Message";
import CountryItem from "../country-item/CountryItem";
import styles from "./CountryList.module.css";
import { ICountry } from "@/types/country.interface";

const CountryList = () => {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (cities?.length === 0)
    return (
      <Message message="Add your first city by clicking on a city on the map." />
    );

  const countries: { country: string; emoji: string }[] | undefined =
    cities?.reduce(
      (arr: { country: string; emoji: string }[], city: ICountry) => {
        if (!arr?.map((el) => el.country).includes(city.country))
          return [...arr, { country: city.country, emoji: city.emoji }];
        else return arr;
      },
      [],
    );

  return (
    <ul className={styles.countryList}>
      {countries?.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
};

export default CountryList;
