import React, { Component } from 'react';
// Header
import Header from './components/Header';
// Nav
import Nav from './components/Nav';
//form
import Form from './components/Form';
//button Icon

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
            <p>Ads</p>
            <p>Ads</p>
            <p>Ads</p>
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
    height: '100vh',
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
  },
  logo: {
    height: '50px',
    width: '50px',
  },
};
