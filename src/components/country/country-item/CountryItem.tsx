import styles from "./CountryItem.module.css";
import { INewCountry } from "@/types/country.interface";
import React, { FC } from "react";
import SmallButton from "@/components/ui/button-small/SmallButton";
import { HiMenuAlt4 } from "react-icons/hi";

const CountryItem: FC<{ country: INewCountry }> = ({ country }) => {
  return (
    <li className={styles.countryItem}>
      <span className={styles.emoji}>{country.emoji}</span>
      <span className={styles.name}>{country.country}</span>
      <SmallButton icon={<HiMenuAlt4 />} type="expand" />
    </li>
  );
};

export default CountryItem;
