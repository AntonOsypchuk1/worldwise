import {FC} from 'react';

import {useCity} from "@/query/useCity";
import {formatDate} from "@/utils/formatDate";

import BackButton from "@/components/ui/button-back/BackButton";
import Spinner from "@/components/ui/spinner/Spinner";

import styles from './City.module.css'

type PropsType = {
  cityId: number
}

const City: FC<PropsType> = ({ cityId }) => {
  const {city, isLoading, error} = useCity(cityId);

  if (isLoading) return <Spinner/>

  const {emoji, cityName, date, notes} = city;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  );
};

export default City;