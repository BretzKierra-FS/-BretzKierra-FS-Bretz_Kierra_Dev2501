import React from 'react';
import User from '../components/User';

function Settings(props) {
  return (
    <main style={styles.container}>
      <User
        firstName={props.firstName}
        lastName={props.lastName}
        avatar={props.avatar}
        userName={props.userName}
        phone={props.phone}
        password={props.password}
        streetNumber={props.streetNumber}
        streetName={props.streetName}
        city={props.city}
        state={props.state}
        postcode={props.postcode}
      />
    </main>
  );
}
export default Settings;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
};
