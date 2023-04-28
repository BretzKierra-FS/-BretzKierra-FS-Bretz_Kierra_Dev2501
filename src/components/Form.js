import React from 'react';
import Button from './buttons/Button';
import { CgCheck } from 'react-icons/cg';
import MyAvatar from './MyAvatar';
import AvatarIcon from '../images/femaleIcon.jpg';

const Form = (props) => {
  return (
    <div style={styles.main}>
      <div style={styles.newPostContainer}>
        <form style={styles.form} onSubmit={props.addItem}>
          <input
            name="pTitle"
            value={props.pTitle}
            onChange={props.getInput}
            type="text"
            style={styles.postInput}
            placeholder={props.titlePlaceholder}
          ></input>
          <input
            name="pText"
            value={props.pText}
            onChange={props.getInput}
            type="text"
            style={styles.postInput}
            placeholder={props.placeholder}
          ></input>
          <Button
            btnType="Submit"
            btnText={<CgCheck />}
            style={styles.btn}
          ></Button>
        </form>
        <div style={styles.newPostBottom}>
          <MyAvatar AvatarIcon={props.avatar} />
          <p>Whats on your mind, Kierra?</p>
        </div>
      </div>
    </div>
  );
};
export default Form;

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem',
    backgroundColor: '#F0F6F6',
    borderRadius: '.75rem',
    width: '90%',
  },
  postInput: {
    alignText: 'center',
    width: '80%',
    padding: '1rem',
    border: 'solid 2px',
    borderColor: 'grey',
    borderRadius: '.75rem',
    fontSize: '1.2rem',
  },
  newPostContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    margin: '2rem',
    borderRadius: '.75rem',
    padding: '1rem',
    filter:
      'drop-shadow(0 10px 13px rgb(0 0 0 / 0.1)) drop-shadow(0 5px 5px rgb(0 0 0 / 0.08))',
  },
  newPostBottom: {
    display: 'flex',
    padding: '2rem',
    justifyContent: 'left',
    fontSize: '1.5rem',
  },
  form: {
    display: 'flex',
    width: '100%',
  },
};
