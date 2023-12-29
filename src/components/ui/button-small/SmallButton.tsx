import { FC, MouseEvent, ReactNode } from "react";
import styles from "./SmallButton.module.css";

const SmallButton: FC<{
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  icon: string | ReactNode;
  type: "expand" | "close";
}> = ({ onClick, icon, type }) => {
  return (
    <button
      className={type === "expand" ? styles.expandBtn : styles.closeBtn}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default SmallButton;
