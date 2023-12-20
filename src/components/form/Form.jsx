import { useRouter } from 'next/navigation';
import {useCallback, useEffect, useMemo, useState} from "react";
import {useForm} from "react-hook-form";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

import {useUrlPosition} from "@/hooks/useURLPosition";

import {getCityDataByCoords} from "@/utils/getCityDataByCoords";
import {convertToEmoji} from "@/utils/convertToEmoji";

import {useAddCity} from "@/services/CityQueries/useAddCity";

import Button from "@/components/ui/button/Button";
import BackButton from "@/components/ui/button-back/BackButton";
import Message from "@/components/ui/message/Message";
import FormRow from "@/components/form/form-row/FormRow";

import styles from './Form.module.css'

const Form = () => {
  const router = useRouter()

  const [cityName, setCityName] = useState("");
  const [emoji, setEmoji] = useState("");
  const [date, setDate] = useState(new Date());
  const [country, setCountry] = useState("")
  
  const [lat, lng] = useUrlPosition()

  useEffect(() => {
    getCityDataByCoords(lat, lng).then((data) => {
        setCityName(data.city)
        setCountry(data.country || data.countryCode)
        setEmoji(convertToEmoji(data.countryCode))
      })
    }, [lat, lng]);

  const {register, handleSubmit, formState} = useForm({
    values: {
      cityName: cityName,
      date: date
    },
  })
  const {errors} = formState;

  const {isLoading, addCity} = useAddCity()

  function onSubmit(data) {
    addCity(
      {
        cityName: data.cityName,
        country,
        emoji,
        date: data.date,
        notes: data.notes,
        position: { lat, lng },
      },
      {
        onSuccess: () => router.push("/cities")
      }
    )
  }

  function onError(error) {
    console.log(error)
  }

  if (!lat && !lng)
    return <Message message="Start clicking somewhere on the map"/>;

  return (
    <form className={`${styles.form} ${isLoading ? styles.loading : ""}`}>
      <FormRow label="City name" error={errors?.cityName?.message}>
        <input
          id="cityName"
          // value={cityName}
          {...register("cityName", {
            required: "required*",
          })}
        />
        <span className={styles.flag}>{emoji}</span>
      </FormRow>

      <FormRow label={`When did you go to ${cityName}?`} error={errors?.date?.message}>
        <DatePicker
          id={String(date)}
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="dd / MM / yyyy"
          {...register("date", {
            required: "required*"
          })}
        />
      </FormRow>

      <FormRow label={`Notes about your trip to ${cityName}`} error={errors?.notes?.message}>
        <textarea
          {...register("notes")}
        />
      </FormRow>

      <div className={styles.buttons}>
        <Button
          type="primary"
          disabled={isLoading}
          onClick={handleSubmit(onSubmit, onError)}
        >
          Add
        </Button>
        <BackButton />
      </div>
    </form>
  );
};

export default Form;