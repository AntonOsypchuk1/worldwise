import Link from "next/link";

import { useDeleteCity } from "@/services/CityQueries/useDeleteCity";
import { formatDate } from "@/utils/formatDate";

import styles from "./CityItem.module.css";
import { ICity } from "@/types/city.interface";
import { FC, MouseEvent } from "react";
import SmallButton from "@/components/ui/button-small/SmallButton";

interface CityProps {
  city: ICity;
}

const CityItem: FC<CityProps> = ({ city }) => {
  const { isDeleting, deleteCity } = useDeleteCity();

  const { cityName, emoji, date, id, position } = city;

  function handleDelete(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    deleteCity(id);
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem}`} /*${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }*/
        href={`/cities/${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <SmallButton onClick={handleDelete} icon="&times;" type="close" />
      </Link>
    </li>
  );
};

export default CityItem;
