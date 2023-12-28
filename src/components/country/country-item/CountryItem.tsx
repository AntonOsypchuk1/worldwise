import styles from "./CountryItem.module.css";
import { INewCountry } from "@/types/country.interface";
import { FC } from "react";

const CountryItem: FC<{ country: INewCountry }> = ({ country }) => {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
};

export default CountryItem;
