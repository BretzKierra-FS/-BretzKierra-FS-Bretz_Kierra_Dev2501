import React, { Component } from 'react';
// Header
import Header from './components/Header';
// Nav
import Nav from './components/Nav';
//form
import Form from './components/Form';
// ads
import Advertisement1 from './components/ads/Advertisement1';
import Advertisement2 from './components/ads/Advertisement2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header placeholder={'Search'} />
        <div style={styles.container}>
          <Nav style={styles.nav} />
          <div style={styles.main}>
            <Form placeholder="Create a New Post..." />
          </div>
          <aside style={styles.ads}>
            Advertisers
            <Advertisement1 />
            <Advertisement2 />
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
  },
  main: {
    display: 'flex',
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
  },
  logo: {
    height: '50px',
    width: '50px',
  },
};
