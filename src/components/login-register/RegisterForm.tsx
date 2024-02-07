import {useSignup} from "@/services/AuthQueries/useSignup";
import styles from "./LoginRegisterForm.module.css";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import FormRow from "@/components/form/form-row/FormRow";

const RegisterForm = () => {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const onSubmit: SubmitHandler<FieldValues> = ({ name, email, password }) => {
    signup(
      { name, email, password, avatar: "" },
      {
        onSettled: () => reset(),
      },
    );
  };

  return (
    <form
      className={`${styles.form} ${isLoading ? "loading" : ""}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormRow label="Full name" error={errors?.name?.message?.toString()}>
        <input
          type="text"
          id="name"
          disabled={isLoading}
          {...register("name", {
            required: "required*",
          })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message?.toString()}>
        <input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "required*",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "not valid email",
            },
          })}
        />
      </FormRow>

      <FormRow label="Password" error={errors?.password?.message?.toString()}>
        <input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "required*",
            minLength: {
              value: 3,
              message: "min 3 char",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message?.toString()}>
        <input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "required*",
            validate: (value) =>
              value === getValues().password || "passwords need to match",
          })}
        />
      </FormRow>

      <div className={styles.buttons}>
        <Button type="primary" disabled={isLoading}>
          Sign Up
        </Button>
        <div>
          <span>Already have an account? </span>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
