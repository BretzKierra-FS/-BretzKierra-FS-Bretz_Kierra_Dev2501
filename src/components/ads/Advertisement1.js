import React from 'react';
const Advertisement1 = (props) => {
  return (
    <div style={styles.adContainer}>
      <span>{props.title}</span>
      <img style={styles.ad1} src={props.image} alt={props.adAlt} />
      <span>{props.des}</span>
    </div>
  );
};

export default Advertisement1;

const styles = {
  adContainer: {
    height: '20%',
    margin: '.5rem',
    textAlign: 'center',
  },
  ad1: {
    display: 'block',
    width: '100%',
  },
};
