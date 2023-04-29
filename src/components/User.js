import React from 'react';

const User = (props) => {
  return (
    <article style={styles.container}>
      <div>
        <div style={styles.profile}>
          <div style={styles.cardTop}>
            <img alt="404" src={props.avatar} />
            <h1>Settings</h1>
          </div>
          <h2>Profile</h2>
          <h4>Name</h4>
          <span style={styles.name}>{props.firstName}</span>
          <span style={styles.name}>{props.lastName}</span>
          <h4>UserName</h4>
          <span>{props.userName}</span>
          <h4>Phone</h4>
          <span>{props.phone}</span>
          <h4>Password</h4>
          <span>{props.password}</span>
          <h2>Address</h2>
          <span>{props.steet}</span>
          <span>{props.city}</span>
          <span>{props.state}</span>
          <span>{props.postcode}</span>
        </div>
      </div>
    </article>
  );
};

export default User;

const styles = {
  container: {
    backgroundColor: 'pink',
    height: '100vh',
    margin: '2rem',
    borderRadius: '.75rem',
  },
  profile: {
    backgroundColor: 'yellow',
    margin: '2rem',
  },
  name: {
    padding: '.5rem',
  },
  cardTop: {
    display: 'flex',
    backgroundColor: 'orange',
  },
};
