import React from 'react';
import cl from './MyButton.module.css';

const MyButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={[cl.myBtn, props.className].join(' ')}>
      {children}
    </button>
  );
};

export default MyButton;
