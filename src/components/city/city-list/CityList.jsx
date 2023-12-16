import Spinner from "@/components/ui/spinner/Spinner";
import Message from "@/components/ui/message/Message";
import CityItem from "@/components/city/city-item/CityItem";

import {useCities} from "@/services/CityQueries/useCities";

import styles from './CityList.module.css'

const CityList = () => {
  const {cities, isLoading} = useCities();

  if (isLoading) return <Spinner/>;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map." />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) =>
        <CityItem city={city} key={city.id}/>
      )}
    </ul>
  );
};

export default CityList;