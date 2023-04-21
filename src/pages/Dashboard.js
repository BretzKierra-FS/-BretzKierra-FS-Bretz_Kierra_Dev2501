import React from 'react';

function DashBoard() {
  return (
    <section style={styles.container}>
      <p>Logo Placeholder</p>
      <h1>Dashboard</h1>
      <p>Place your chart here</p>
    </section>
  );
}
export default DashBoard;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '99vh',
  },
};
