import styles from "./Message.module.css";
import { FC } from "react";

const Message: FC<{ message: string }> = ({ message }) => {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
};

export default Message;
