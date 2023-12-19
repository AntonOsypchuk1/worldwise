import React, {FC, PropsWithChildren} from 'react';
import styles from './Button.module.css'

const Button: FC<PropsWithChildren<{
    type: 'primary' | 'position' | 'back'
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    disabled: boolean
  }>
> = ({onClick, type, disabled, children}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.btn} ${styles[type]}`}
    >
      {children}
    </button>
  );
};

export default Button;