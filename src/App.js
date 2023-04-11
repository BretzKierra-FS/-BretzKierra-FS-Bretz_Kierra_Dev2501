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

class App extends Component {
  render() {
    return (
      <div>
        <Header placeholder={'Search'} />
        <div style={styles.container}>
          <Nav style={styles.nav} />
          <div style={styles.main}>
            <Form placeholder="Create a New Post..." />
            <PostCard
              avatar={avatar2}
              username={'Steven Jones'}
              postText={'My lunch today was amazing! Talk about food art!'}
              image={postImage1}
            />
            <PostCard
              avatar={avatar3}
              username={'Jessica Myra'}
              postText={'My husband is so good with the kids! Love you babe!'}
              image={postImage2}
            />
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
