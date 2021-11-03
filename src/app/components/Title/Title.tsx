import React from 'react';
import styles from './Title.module.css';

type TitleProps = {
  name: string;
};

function Title({ name }: TitleProps): JSX.Element {
  return <h1 className={styles.title}>{name}</h1>;
}
export default Title;
