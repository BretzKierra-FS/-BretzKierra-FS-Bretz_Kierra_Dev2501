import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
  return (
    <article style={styles.container}>
      <div>
        <div style={styles.profile}>
          <nav style={styles.cardTop}>
            <img alt="404" src={props.avatar} />
            <h1 style={styles.title}>Settings</h1>
            <div style={styles.buttonConntainer}>
              <p style={styles.buttons}>Profile</p>
              <p style={styles.buttons}>Privacy</p>
              <p style={styles.buttons}>Notifications</p>
              <p style={styles.buttons}>Support</p>
            </div>
          </nav>
          <h2>Profile</h2>
          <div style={styles.cardMid}>
            <div>
              <h4>Name</h4>
              <span style={styles.name}>{props.firstName}</span>
              <span style={styles.name}>{props.lastName}</span>
            </div>
            <div>
              <h4>UserName</h4>
              <span>{props.userName}</span>
            </div>
            <div>
              <h4>Phone</h4>
              <span>{props.phone}</span>
            </div>
            <div>
              <h4>Password</h4>
              <span>{props.password}</span>
            </div>
          </div>

          <h2>Address</h2>
          <div style={styles.address}>
            <span style={styles.words}>{props.streetNumber}</span>
            <span>{props.streetName}</span>
            <span style={styles.words}>{props.city}</span>
            <span style={styles.words}>{props.state}</span>
            <span style={styles.words}>{props.postcode}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default User;

const styles = {
  container: {
    backgroundColor: 'white',

    margin: '2rem',
    borderRadius: '.75rem',
  },
  profile: {
    backgroundColor: '#e0f1f1',
    margin: '2rem',
    padding: '1rem',
  },
  name: {
    padding: '.5rem',
  },
  cardTop: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F0F6F6',
    borderRadius: '.75rem',
  },
  buttonConntainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    marginTop: '4rem',
  },
  buttons: {
    position: 'relative',
    backgroundColor: '#42BFDD',
    height: '20%',
    margin: '.5rem',
    padding: '1rem',
    borderRadius: '.75rem',
    textAlign: 'center',
    filter:
      'drop-shadow(0 10px 13px rgb(0 0 0 / 0.1)) drop-shadow(0 5px 5px rgb(0 0 0 / 0.08))',
  },
  title: {
    padding: '.5rem',
  },
  cardMid: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  address: {},
  words: {
    padding: '1ch',
  },
  '@media screen and (min-width: 980px)': {
    cardMid: { backgroundColor: 'blue' },
  },
};
