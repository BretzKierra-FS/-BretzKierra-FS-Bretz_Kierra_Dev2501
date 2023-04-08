import React from 'react';

const Button = (props) => {
  return (
    <button style={styles.btn} type={props.btnType}>
      {props.btnText}
    </button>
  );
};

export default Button;

const styles = {
  btn: {
    paddingTop: '.5rem',
    backgroundColor: '#FFD744',
    borderRadius: '1rem',
    fontSize: '3rem',
    cursor: 'pointer',
  },
};
