import React from 'react';
import MyAvatar from './MyAvatar';

const ContactCard = ({ card }) => {
  return (
    <div key={card.id} style={styles.cardContainer}>
      <MyAvatar AvatarIcon={card.avatar} />
      <h4>{card.userName}</h4>
      <p style={{ color: 'green ' }}>Online</p>
    </div>
  );
};

export default ContactCard;

const styles = {
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    borderBottom: 'solid lightGrey 1px',
  },
};
