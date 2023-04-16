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
import { element } from 'prop-types';

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
      },
      {
        pName: 'Jesse Myra',
        pAvatar: avatar3,
        pText: 'My husband is so good with the kids! Love you babe!',
        pImage: postImage2,
        pAlt: '404 No Image',
      },
    ],
  };
  render() {
    //The map fuction array.map(function(currentValue, index, arguement), this Value)
    let postList = this.state.pList.map((element, index) => {
      //pass through the key value from props
      return <PostCard key={index} val={element} />;
    });
    return (
      <div>
        <Header placeholder={'Search'} />
        <div style={styles.container}>
          <Nav style={styles.nav} />
          <div style={styles.main}>
            <Form placeholder="Create a New Post..." />
            {postList}
          </div>
          <aside style={styles.ads}>
            Advertisers
            <Advertisement1
              image={ad1}
              title={'Baby Sheild'}
              des={'Protection from oppsies!'}
            />
            <Advertisement1
              image={ad2}
              title={'Fresh Brand'}
              des={'For a clean smile'}
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
