import styles from "./CountryItem.module.css";
import { INewCountry } from "@/types/country.interface";
import React, { FC, useState } from "react";
import SmallButton from "@/components/ui/button-small/SmallButton";
import { HiMenuAlt4 } from "react-icons/hi";
import CountryInfo from "@/components/country/country-info/CountryInfo";
import Link from "next/link";

const CountryItem: FC<{ country: INewCountry }> = ({ country }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <li>
      <Link
        href={`/countries?code=${country.countryCode}`}
        className={styles.countryItem}
      >
        <span className={styles.emoji}>{country.emoji}</span>
        <span className={styles.name}>{country.countryName}</span>
        <SmallButton
          onClick={() => setExpanded((value) => !value)}
          icon={<HiMenuAlt4 />}
          type="expand"
        />
      </Link>

      {expanded && <CountryInfo />}
    </li>
  );
};

export default CountryItem;
