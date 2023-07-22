import React, { ReactNode } from 'react';
import styles from './title.module.scss';


const Title = (props: React.ReactNode) => {
  return (

    <h1 className={styles.title}>{props}</h1>
  );
};

export default Title;