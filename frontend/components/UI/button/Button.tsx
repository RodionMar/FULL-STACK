import React from 'react';
import styles from './button.module.scss';

const Button = (text: React.ReactNode) => {
  return (
    <button className={styles.button}>{text}</button>
  );
};

export default Button;