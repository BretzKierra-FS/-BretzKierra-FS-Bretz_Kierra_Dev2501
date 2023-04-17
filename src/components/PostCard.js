import React from 'react';
import MyAvatar from './MyAvatar';
// import AvatarIcon from '../images/avatar2.png';
import { ImCross } from 'react-icons/im';
import { CgPen } from 'react-icons/cg';
// import image from '../images/food.png';

const PostCard = (props) => {
  return (
    // <div>
    <article style={styles.PostCard}>
      <div style={styles.postCardTop}>
        <MyAvatar AvatarIcon={props.val.pAvatar} />
        <h6 style={styles.userName}>{props.val.pName}</h6>
        <ImCross onClick={props.delMe} style={styles.deletePost} />
      </div>
      <div>
        <p>{props.val.pText}</p>
        <img src={props.val.pImage} style={styles.img} alt={props.val.alt} />
        <CgPen onClick={props.editMe} />
        <span>Edit</span>
      </div>
    </article>
    // </div>
  );
};
export default PostCard;

const styles = {
  PostCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: '87%',
    margin: '1rem',
    borderRadius: '.75rem',
    padding: '1rem',

    filter:
      'drop-shadow(0 10px 13px rgb(0 0 0 / 0.1)) drop-shadow(0 5px 5px rgb(0 0 0 / 0.08))',
  },
  postCardTop: {
    display: 'flex',
  },
  deletePost: {
    paddingLeft: '75%',
    cursor: 'pointer',
  },
  img: {
    display: 'block',
    width: '100%',
  },
};
