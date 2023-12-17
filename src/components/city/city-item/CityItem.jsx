import Link from "next/link";

import {useDeleteCity} from "@/services/CityQueries/useDeleteCity";
import {formatDate} from "@/utils/formatDate";

import styles from './CityItem.module.css'
import Spinner from "@/components/ui/spinner/Spinner";

const CityItem = ({ city }) => {
  const {isDeleting, deleteCity} = useDeleteCity()

  const {cityName, emoji, date, id, position} = city;

  function handleDelete(e) {
    e.preventDefault()

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
        <button className={styles.deleteBtn} onClick={handleDelete}>
          &times;
        </button>
      </Link>
    </li>
  );
};

export default CityItem;