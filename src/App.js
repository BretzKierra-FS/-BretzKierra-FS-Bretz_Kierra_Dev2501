import React, { Component } from 'react';
// Header
import Header from './components/Header';
// Nav
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header placeholder={'Search'} />
        <div style={styles.container}>
          <Nav />
          <div style={styles.main}>
            <p>THE MAIN FORM</p>
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
    backgroundColor: '#BBE6E4',
  },
  main: {
    display: 'flex',
    flex: 2,
    backgroundColor: 'red',

    margin: '2rem',
  },
  ads: {
    backgroundColor: 'blue',
  },
  logo: {
    height: '50px',
    width: '50px',
  },
  box: {
    height: '100px',
    width: '100px',
    backgroundColor: 'grey',
    padding: '2%',
    margin: '2%',
  },
};
