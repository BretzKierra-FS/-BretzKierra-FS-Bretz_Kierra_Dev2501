import React from 'react';
import logo from '../images/logo.png';
import MyAvatar from './MyAvatar';
import AvatarIcon from '../images/femaleIcon.jpg';
import { CgSearch, CgMenu } from 'react-icons/cg';

const Header = (props) => {
  return (
    <header style={styles.header}>
      <div>
        <img style={styles.logo} src={logo} alt={'logo'} />
      </div>
      <div style={styles.searchContainer}>
        <h1 style={styles.title}>Banana.Chat</h1>
        <form>
          <CgSearch />
          <input
            type="search"
            style={styles.searchBox}
            placeholder={props.placeholder}
          />
        </form>
      </div>
      <div style={styles.rNav}>
        <MyAvatar AvatarIcon={AvatarIcon} />
        <span>Kierra Bretz</span>
        <CgMenu style={styles.navFont} />
      </div>
    </header>
  );
};
export default Header;

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1ch',
    height: '12vh',
    backgroundColor: '#FFA3D1',
    paddingLeft: '4ch',
    paddingRight: '4ch',
    color: '#F0F6F6',
    fontSize: '.8rem',
  },
  logo: {
    height: '10vh',
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    marginBottom: '3ch',
  },
  title: {
    fontSize: '1.5ch',
    marginBottom: '3ch',
  },
  searchBox: {
    marginLeft: '2px',
  },
  rNav: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '2ch',
    alignItems: 'center',
    textAlign: 'center',
  },
  navFont: {
    fontSize: '1rem',
  },
};
