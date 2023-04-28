import React, { Component } from 'react';

import Form from '../components/Form';

//pList items
import PostCard from '../components/PostCard';
import postImage1 from '../images/food.png'; //first post
import avatar2 from '../images/avatar2.png'; //first post
import postImage2 from '../images/postImage2.png'; //second post
import avatar3 from '../images/avatar3.png';
import AvatarIcon from '../images/femaleIcon.jpg';
import placeholderImg from '../images/placeholder.png';

class NewsFeed extends Component {
  state = {
    pList: [
      {
        pName: 'Athen Bretz',
        pAvatar: avatar2,
        pTitle: 'Lunch',
        pText: 'My lunch today was amazing! Talk about food art!',
        pImage: postImage1,
        pAlt: '404 No Image',
        index: 0,
      },
      {
        pName: 'Jesse Myra',
        pAvatar: avatar3,
        pTitle: 'Family',
        pText: 'My husband is so good with the kids! Love you babe!',
        pImage: postImage2,
        pAlt: '404 No Image',
        index: 1,
      },
    ],
    color: '#FFA3D1',
  };

  getInput = (e) => {
    this.setState({ [e.target.name]: e.target.value }); //Yes! For multiple input fields.
  };

  addItem = (e) => {
    e.preventDefault();
    this.setState({
      pList: [
        ...this.state.pList,
        {
          pTitle: this.state.pTitle,
          pText: this.state.pText,
          pName: 'Kierra bretz',
          pAvatar: AvatarIcon,
          pImage: placeholderImg,
          index: this.state.pList.length,
        },
      ],
    });
    //clear
    e.target.reset();
  };

  removeItem = (key) => {
    console.log(key);
    const updatedList = this.state.pList.filter(
      (element, item) => item !== key
    );
    this.setState({ pList: updatedList });
  };

  render() {
    let postList = this.state.pList.map((element, index) => {
      return (
        <PostCard
          key={index}
          val={element}
          delMe={() => this.removeItem(index)}
          //editMe={() => this.editItem(element)}
        />
      );
    });

    return (
      <div>
        <Form
        avatar=
          placeholder="Create a New Post..."
          titlePlaceholder="Title"
          getInput={this.getInput}
          addItem={this.addItem}
        />
        {postList}
      </div>
    );
  }
}
export default NewsFeed;
