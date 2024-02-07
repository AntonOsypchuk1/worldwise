import { useCities } from "@/services/CityQueries/useCities";
import Spinner from "../../ui/spinner/Spinner";
import Message from "../../ui/message/Message";
import CountryItem from "../country-item/CountryItem";
import styles from "./CountryList.module.css";
import { ICity } from "@/types/city.interface";

const CountryList = () => {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (cities?.length === 0)
    return (
      <Message message="Add your first city by clicking on a city on the map." />
    );

  const countries:
    | { countryName: string; countryCode: string; emoji: string }[]
    | undefined = cities?.reduce(
    (
      arr: { countryName: string; countryCode: string; emoji: string }[],
      city: ICity,
    ) => {
      if (!arr?.map((el) => el.countryName).includes(city.countryName))
        return [
          ...arr,
          {
            countryName: city.countryName,
            countryCode: city.countryCode,
            emoji: city.emoji,
          },
        ];
      else return arr;
    },
    [],
  );

  return (
    <ul className={styles.countryList}>
      {countries?.map((country) => (
        <CountryItem country={country} key={country.countryCode} />
      ))}
    </ul>
  );
};

export default CountryList;
