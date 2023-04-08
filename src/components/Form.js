import React from 'react';
import Button from './buttons/Button';
import { CgCheck } from 'react-icons/cg';

const Form = (props) => {
  return (
    <div style={styles.main}>
      <div style={styles.newPostContainer}>
        <form style={styles.form}>
          <input
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
    width: '100%',
  },
  postInput: {
    alignText: 'center',
    width: '80%',
    padding: '1rem',
    marginLeft: '7rem',
    border: 'solid 2px',
    borderColor: 'grey',
    borderRadius: '.75rem',
  },
  newPostContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: '2rem',
    borderRadius: '.75rem',
    padding: '1rem',
    filter:
      'drop-shadow(0 10px 13px rgb(0 0 0 / 0.1)) drop-shadow(0 5px 5px rgb(0 0 0 / 0.08))',
  },
  form: {
    display: 'flex',
    width: '100%',
  },
};
