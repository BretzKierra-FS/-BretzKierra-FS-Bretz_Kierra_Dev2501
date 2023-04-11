import React from 'react';

const Nav = (props) => {
  return (
    <div style={styles.nav}>
      <button style={styles.navLink}>Newsfeed</button>
      <button style={styles.navLink}>Messages</button>
      <button style={styles.navLink}>Watch</button>
    </div>
  );
};
export default Nav;

const styles = {
  nav: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '1rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    backgroundColor: '#F0F6F6',
    borderRadius: '.75rem',
    height: '30ch',
  },
  navLink: {
    backgroundColor: '#42BFDD',
    padding: '1rem',
    margin: '1rem',
    borderRadius: '.75rem',
    textAlign: 'center',
    filter:
      'drop-shadow(0 10px 13px rgb(0 0 0 / 0.1)) drop-shadow(0 5px 5px rgb(0 0 0 / 0.08))',
  },
};
