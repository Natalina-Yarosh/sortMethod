import React from 'react';
import classes from './Button.module.css';

const Button = ({options}) => {
  return (
    <div className={classes.tracksBtns}>
      {options.map((option) => (
        <button onClick={option.click} className={classes.btn}>
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default Button;
