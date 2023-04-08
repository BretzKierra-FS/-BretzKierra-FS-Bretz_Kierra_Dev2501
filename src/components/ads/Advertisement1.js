import React from 'react';
import ad1 from '../../images/ad1.png';
const Advertisement1 = (props) => {
  return (
    <aside style={styles.adContainer}>
      <span>Baby Shield</span>
      <img style={styles.ad1} src={ad1} />
      <span>Anti splash sheild </span>
    </aside>
  );
};

export default Advertisement1;

const styles = {
  adContainer: {
    height: '20vh',
    margin: '.5rem',
    textAlign: 'center',
  },
  ad1: {
    display: 'block',
    width: '100%',
  },
};
