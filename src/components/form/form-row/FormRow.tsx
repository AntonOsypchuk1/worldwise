import styles from "./FormRow.module.css";
import { FC, ReactNode } from "react";

const FormRow: FC<{ label?: string; error?: string; children: ReactNode }> = ({
  label,
  error,
  children,
}) => {
  const id = Array.isArray(children) ? children[0].props.id : null;

  return (
    <div className={styles.row}>
      <div className={styles.message}>
        {label && <label htmlFor={id}>{label}</label>}
        {error && <span className={styles.error}>{error}</span>}
      </div>
      {children}
    </div>
  );
};

export default FormRow;
