import React from 'react';

function Messages() {
  return (
    <section style={styles.container}>
      <p>Logo Placeholder</p>
      <h1>Messages</h1>
      <p>Place your chart here</p>
    </section>
  );
}
export default Messages;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '99vh',
  },
};
