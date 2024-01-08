import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useUrlPosition } from "@/hooks/useURLPosition";

import { getCityDataByCoords } from "@/utils/getCityDataByCoords";
import { convertToEmoji } from "@/utils/convertToEmoji";

import { useAddCity } from "@/services/CityQueries/useAddCity";

import Button from "@/components/ui/button/Button";
import BackButton from "@/components/ui/button-back/BackButton";
import Message from "@/components/ui/message/Message";
import FormRow from "@/components/form/form-row/FormRow";

import styles from "./Form.module.css";

const Form = () => {
  const router = useRouter();

  const [cityName, setCityName] = useState("");
  const [emoji, setEmoji] = useState("");
  const [date, setDate] = useState(new Date());
  const [countryName, setCountryName] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const { lat, lng } = useUrlPosition();

  useEffect(() => {
    getCityDataByCoords(lat, lng).then((data) => {
      setCityName(data?.city);
      setCountryName(data?.countryName || data?.countryCode);
      setCountryCode(data?.countryCode);
      setEmoji(convertToEmoji(data?.countryCode));
    });
  }, [lat, lng]);

  const { register, handleSubmit, formState, control } = useForm({
    values: {
      cityName: cityName,
      date: date,
      notes: "",
    },
  });
  const { errors } = formState;

  const { isLoading, addCity } = useAddCity();

  const onSubmit: SubmitHandler<{
    cityName: string;
    date: Date;
    notes?: string;
  }> = (data) => {
    addCity(
      {
        cityName: data.cityName,
        countryName,
        countryCode,
        emoji,
        date: data.date.toISOString(),
        notes: data.notes || "",
        position: { lat, lng },
      },
      {
        onSuccess: () => router.push("/cities"),
      },
    );
  };

  const onError: SubmitErrorHandler<Error> = (error) => {
    console.log(error);
  };

  if (!lat && !lng)
    return <Message message="Start clicking somewhere on the map" />;

  return (
    <form className={`${styles.form} ${isLoading ? styles.loading : ""}`}>
      <FormRow label="City name" error={errors?.cityName?.message}>
        <input
          id="cityName"
          {...register("cityName", {
            required: "required*",
          })}
        />
        <span className={styles.flag}>{emoji}</span>
      </FormRow>

      <FormRow
        label={`When did you go to ${cityName}?`}
        error={errors?.date?.message}
      >
        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <DatePicker
              placeholderText="Select date"
              onChange={(date) => field.onChange(date)}
              selected={field.value}
            />
          )}
          rules={{
            required: "required*",
          }}
        />
      </FormRow>

      <FormRow label={`Notes about your trip to ${cityName}`}>
        <textarea
          id="notes"
          {...register("notes", {
            required: false,
          })}
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
