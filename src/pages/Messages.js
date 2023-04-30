import React, { useState } from 'react';
import MessageBox from '../components/MessageBox';
import ContactCard from '../components/ContactCard';

import avatar1 from '../images/avatar2.png';
import avatar2 from '../images/avatar3.png';
import avatar3 from '../images/femaleIcon.jpg';

function Messages() {
  const [card] = useState([
    { avatar: { avatar1 }, userName: 'Sam Mire' },
    { avatar: avatar2, userName: 'Wesley Huges' },
    { avatar: avatar3, userName: 'Sam Mire' },
    { avatar: avatar1, userName: 'Jeff OverLoft' },
  ]);

  return (
    <section style={styles.container}>
      <h1 style={styles.title}>Messages</h1>
      <div style={styles.chatContainer}>
        <MessageBox />
        <p style={styles.contacts}>
          <h4>Contacts</h4>
          {card.map((card, id) => (
            <ContactCard key={id} id={id} card={card} />
          ))}
        </p>
      </div>
    </section>
  );
}
export default Messages;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  chatContainer: {
    display: 'flex',
    margin: '0',
  },
  contacts: {
    backgroundColor: '#F0F6F6',
    marginLeft: '4rem',
    widthMin: '15%',
    height: '50%',
    borderRadius: '.75rem',
    alignItems: 'center',
    paddingRight: '.5rem',
    textAlign: 'center',
  },
  title: {
    margin: '1rem',
    color: '#F0F6F6',
  },

};
