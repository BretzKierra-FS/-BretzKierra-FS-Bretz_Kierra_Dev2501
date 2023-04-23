import React from 'react';
import MyAvatar from './MyAvatar';
import avatar1 from '../images/avatar2.png';
import Button from './buttons/Button';
import { CgCheck } from 'react-icons/cg';

const MessageBox = (props) => {
  return (
    <div style={styles.container}>
      <div style={styles.mainChat}>
        <div>
          <h4 style={styles.title}>Chat</h4>
        </div>
        <div style={styles.chatBox}>
          <div style={styles.chatWindow}>
            <p>10:03AM</p>
            <p style={styles.reply}>Reply message</p>
            <div style={styles.responseContainer}>
              <MyAvatar AvatarIcon={avatar1} />
              <p>Jason</p>
              <p style={styles.response}>response Message</p>
            </div>
          </div>
          <div style={styles.chatWindow}>
            <p>1:08PM</p>
            <p style={styles.reply}>Reply message</p>
            <div style={styles.responseContainer}>
              <MyAvatar AvatarIcon={avatar1} />
              <p>Jason</p>
              <div>
                <p style={styles.response}>response Message</p>
                <p style={styles.response}>response Message. La de dah..</p>
              </div>
            </div>
          </div>
          <div style={styles.chatWindow}>
            <p>3:42PM</p>
            <p style={styles.reply}>Reply message</p>
            <div style={styles.responseContainer}>
              <MyAvatar AvatarIcon={avatar1} />
              <p>Jason</p>
              <p style={styles.response}>response Message</p>
            </div>
          </div>
          <form>
            <input
              type="text"
              style={styles.textInput}
              placeholder="Reply....."
            ></input>
            <Button
              btnType="Submit"
              btnText={<CgCheck />}
              style={styles.btn}
            ></Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    heightMax: '100vh',
    width: '50%',
    filter:
      'drop-shadow(0 10px 13px rgb(0 0 0 / 0.1)) drop-shadow(0 5px 5px rgb(0 0 0 / 0.08))',
  },
  title: {
    margin: '1rem',
    color: '#F0F6F6',
    fontWeight: '700',
  },
  mainChat: {
    marginLeft: '2rem',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    borderRadius: '.75rem',
    backgroundColor: '#43bfdeff',
    paddingBottom: '3rem',
  },
  responseContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  response: {
    backgroundColor: 'lightBlue',
    borderRadius: '.75rem',
    maxWidth: '90%',
    marginLeft: '30%',

    padding: '1rem',
  },
  reply: {
    backgroundColor: 'lightGrey',
    borderRadius: '.75rem',
    padding: '1rem',
    maxWidth: '50%',
    marginLeft: '2ch',
  },
  chatBox: {
    backgroundColor: '#F0F6F6',
  },
  textInput: {
    padding: '1rem',
    width: '80%',
  },
};
