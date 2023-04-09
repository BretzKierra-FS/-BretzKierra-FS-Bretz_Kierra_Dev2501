import React from 'react';
import MyAvatar from './MyAvatar';
import AvatarIcon from '../images/avatar2.png';
import { ImCross } from 'react-icons/im';
import { CgPen } from 'react-icons/cg';
import image from '../images/food.png';

const PostCard = (props) => {
  return (
    <div>
      <div style={styles.PostCard}>
        <div style={styles.postCardTop}>
          <MyAvatar AvatarIcon={props.avatar} />
          <h6 style={styles.userName}>{props.username}</h6>
          <ImCross style={styles.deletePost} />
        </div>
        <div>
          <p>{props.postText}</p>
          <img src={props.image} style={styles.img} />
          <CgPen />
          <span>Edit</span>
        </div>
      </div>
    </div>
  );
};
export default PostCard;

const styles = {
  PostCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    margin: '2rem',
    borderRadius: '.75rem',
    padding: '1rem',
    filter:
      'drop-shadow(0 10px 13px rgb(0 0 0 / 0.1)) drop-shadow(0 5px 5px rgb(0 0 0 / 0.08))',
  },
  postCardTop: {
    display: 'flex',
  },
  deletePost: {
    paddingLeft: '90%',
    cursor: 'pointer',
  },
  img: {
    display: 'block',
    width: '100%',
  },
};
