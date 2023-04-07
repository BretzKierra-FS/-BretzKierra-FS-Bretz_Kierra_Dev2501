import React from 'react';
import logo from '../images/logo.png';
const Header = (props) => {
  return (
    <header style={styles.header}>
      <div>
        <img style={styles.logo} src={logo} alt={'logo'} />
      </div>
    </header>
  );
};
export default Header;

const styles = {
  header: {
    height: '10vh',
    backgroundColor: 'pink',
  },
  logo: {
    height: '10vh',
    paddingLeft: '20px',
  },
};
