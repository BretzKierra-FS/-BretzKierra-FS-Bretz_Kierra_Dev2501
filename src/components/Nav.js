import React from 'react';
import { Link } from 'react-router-dom';
const Nav = (props) => {
  return (
    <div style={styles.nav}>
      <Link to="DashBoard" style={styles.navLink}>
        DashBoard
      </Link>
      <Link to="Newsfeed" style={styles.navLink}>
        Newsfeed
      </Link>
      <Link to="Messages" style={styles.navLink}>
        Messages
      </Link>
      <Link to="Settings" style={styles.navLink}>
        Settings
      </Link>
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
    height: '40ch',
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
