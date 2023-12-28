import { FormEvent, useState } from "react";
import styles from "./LoginRegisterForm.module.css";
import Button from "@/components/ui/button/Button";
import { useLogin } from "@/services/AuthQueries/useLogin";
import Link from "next/link";

const LoginForm = () => {
  const [email, setEmail] = useState("creator@gmail.com");
  const [password, setPassword] = useState("12345");
  const { login, isLoading } = useLogin();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  return (
    <form
      className={`${styles.form} ${isLoading ? "loading" : ""}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.row}>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          disabled={isLoading}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          disabled={isLoading}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary" disabled={isLoading}>
          Login
        </Button>
        <Link href="/register">
          <Button type="secondary" disabled={isLoading}>
            Sign Up
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
