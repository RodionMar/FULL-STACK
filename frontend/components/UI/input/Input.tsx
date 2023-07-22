import React from "react";
import styles from './input.module.scss';

interface Props  {
  type: string,
  placeholder: string
}

const Input = (props: Props) => {
  return (
    <input className={styles.inputField} {...props} required/>
  );
};

export default Input;