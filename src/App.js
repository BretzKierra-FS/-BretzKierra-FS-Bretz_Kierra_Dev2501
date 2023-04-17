import React, { Component } from 'react';
// Header
import Header from './components/Header';
// Nav
import Nav from './components/Nav';
//form
import Form from './components/Form';
// ads
import Advertisement1 from './components/ads/Advertisement1';
import ad1 from '../src/images/ad1.png';
import ad2 from '../src/images/ad2.png';
//PostCard
import PostCard from './components/PostCard';
import postImage1 from './images/food.png'; //first post
import avatar2 from './images/avatar2.png'; //first post
import postImage2 from './images/postImage2.png'; //second post
import avatar3 from './images/avatar3.png';
import AvatarIcon from './images/femaleIcon.jpg';
import placeholderImg from './images/placeholder.png';
//import { element } from 'prop-types';

class App extends Component {
  state = {
    //Array to store list items
    pList: [
      {
        pName: 'Athen Bretz',
        pAvatar: avatar2,
        pText: 'My lunch today was amazing! Talk about food art!',
        pImage: postImage1,
        pAlt: '404 No Image',
        index: 0,
      },
      {
        pName: 'Jesse Myra',
        pAvatar: avatar3,
        pText: 'My husband is so good with the kids! Love you babe!',
        pImage: postImage2,
        pAlt: '404 No Image',
        index: 1,
      },
    ],
  };
  // Fuction for input values
  getInput = (e) => {
    this.setState({ pText: e.target.value });
  };
  // add function
  addItem = (e) => {
    e.preventDefault();
    this.setState({
      pList: [
        ...this.state.pList,
        {
          pText: this.state.pText,
          pName: 'Kierra bretz',
          pAvatar: AvatarIcon,
          pImage: placeholderImg,
        },
      ],
    });
    //clear
    e.target.reset();
  };

  // Delete Function
  // removeItem = (key) => {
  //   const newPList = [...this.state.pList];
  //   newPList.splice(key, 1);
  //   this.setState(() => ({
  //     pList: newPList,
  //   }));
  // };

  removeItem = (key) => {
    console.log(key);
    let newPList = [...this.state.pList];

    console.log(newPList);
    this.setState({
      pList: this.state.pList.filter((item) => item.index !== key),
    });
  };

  //edit Item
  editItem = (element) => {};

  render() {
    //The map fuction array.map(function(currentValue, index, arguement), this Value)
    let postList = this.state.pList.map((element, index) => {
      //pass through the key value from props
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
        <Header placeholder={'Search'} />
        <div style={styles.container}>
          <Nav style={styles.nav} />
          <div style={styles.main}>
            <Form
              placeholder="Create a New Post..."
              getInput={this.getInput}
              addItem={this.addItem}
            />
            {postList}
          </div>
          <aside style={styles.ads}>
            Advertisers
            <Advertisement1
              image={ad1}
              title={'Baby Sheild'}
              des={'Protection from oppsies!'}
              adAlt={'404'}
            />
            <Advertisement1
              image={ad2}
              title={'Fresh Brand'}
              des={'For a clean smile'}
              adAlt={'404'}
            />
          </aside>
        </div>
      </div>
    );
  }
}
export default App;

const styles = {
  container: {
    display: 'flex',
    felxDirection: 'row',
    height: '100% ',
    backgroundColor: '#084B83',
    justifyContent: 'space-between',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 2,
  },
  nav: {
    display: 'flex',
  },
  ads: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F0F6F6',
    width: '16%',
    padding: '1rem',
    textAlign: 'center',
    gap: '2rem',
  },
  logo: {
    height: '50px',
    width: '50px',
  },
};
