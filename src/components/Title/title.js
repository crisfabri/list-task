import React from 'react';
import styles from './title.module.scss';

function Title({ children, ...rest }) {
  return (
    <p className={styles.title} {...rest}>
      {children}
    </p>
  );
}

export default Title;
