import React from 'react';
import logo from '../images/logo.png';
import MyAvatar from './MyAvatar';
import AvatarIcon from '../images/femaleIcon.jpg';
import { CgSearch, CgMenu } from 'react-icons/cg';
// import { CgCheck } from 'react-icons/cg';

const Header = (props) => {
  return (
    <header style={styles.header}>
      <div>
        <img style={styles.logo} src={logo} alt={'logo'} />
      </div>
      <div style={styles.searchContainer}>
        <h1 style={styles.title}>Banana.Chat</h1>
        <form>
          <button>
            <CgSearch />
          </button>
          <input
            type="search"
            style={styles.searchBox}
            placeholder={props.placeholder}
          />
        </form>
      </div>
      <div style={styles.rNav}>
        <MyAvatar AvatarIcon={AvatarIcon} style={styles.avatar} />
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
    height: '8vh',
    backgroundColor: '#FFA3D1',
    paddingLeft: '2ch',
    paddingRight: '2ch',
    fontSize: '1rem',
  },
  logo: {
    height: '7vh',
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    marginBottom: '2ch',
  },
  title: {
    fontSize: '1.5ch',
    marginBottom: '3ch',
    color: '#F0F6F6',
  },
  searchBox: {
    paddingRight: '8rem',
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
