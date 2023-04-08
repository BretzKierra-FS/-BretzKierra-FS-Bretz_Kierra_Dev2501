import React from 'react';
import ad2 from '../../images/ad2.png';
const Advertisement2 = (props) => {
  return (
    <aside style={styles.adContainer}>
      <span>Tooth Paste</span>
      <img style={styles.ad2} src={ad2} />
      <span>For happy smiles! </span>
    </aside>
  );
};

export default Advertisement2;

const styles = {
  adContainer: {
    height: '20vh',
    margin: '.5rem',
    textAlign: 'center',
  },
  ad2: {
    display: 'block',
    width: '100%',
  },
};
