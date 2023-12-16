import Link from "next/link";

// import {useCities} from "@/contexts/CitiesContext";

import styles from './CityItem.module.css'
import {formatDate} from "@/utils/formatDate";

const CityItem = ({ city }) => {
  // const {currentCity} = useCities();

  const {cityName, emoji, date, id, position} = city;

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
        <button className={styles.deleteBtn} onClick={() => {}}>
          &times;
        </button>
      </Link>
    </li>
  );
};

export default CityItem;