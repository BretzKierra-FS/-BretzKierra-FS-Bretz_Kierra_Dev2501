import React, { Component } from 'react';
// Header
import Header from './components/Header';
// Images
import MyAvatar from './components/MyAvatar';
import AvatarIcon from './images/femaleIcon.jpg';
class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header />
        
        <div style={styles.box}>
          <MyAvatar AvatarIcon={AvatarIcon} />
          <img src={AvatarIcon} alt={'Icon'} style={styles.logo} />
        </div>
        <div style={styles.box}></div>
      </div>
    );
  }
}
export default App;

const styles = {
  container: {
    display: 'flex',
    felxDirection: 'row',
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
