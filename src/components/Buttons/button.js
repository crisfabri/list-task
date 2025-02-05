import React from 'react';
import styles from './button.module.scss';

export const getClasses = (classes) =>
  classes
    .filter((item) => item !== '')
    .join(' ')
    .trim();

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

function Button({ type, variant = 'primary', children, ...rest }) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={getClasses([
        styles.button,
        styles[`button--${buttonTypes[variant]}`],
      ])}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
