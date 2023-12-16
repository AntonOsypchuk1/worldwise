import {useCities} from "@/contexts/CitiesContext";

import Spinner from "@/components/ui/spinner/Spinner";
import Message from "@/components/ui/message/Message";

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

    </ul>
  );
};

export default CityList;