import React from 'react';

function Settings() {
  return (
    <section style={styles.container}>
      <p>Logo Placeholder</p>
      <h1>Settings</h1>
      <p>Place your chart here</p>
    </section>
  );
}
export default Settings;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '99vh',
  },
};
