import React, { useState, useEffect } from 'react';
// Header
import Header from './components/Header';
// Nav
import Nav from './components/Nav';
// ads
import Advertisement1 from './components/ads/Advertisement1';
import ad1 from '../src/images/ad1.png';
import ad2 from '../src/images/ad2.png';

// Import React Routes
import { Route, Routes } from 'react-router-dom';
import NewsFeed from './pages/NewsFeed';
import Messages from './pages/Messages';
import Settings from './pages/Settings';
import DashBoard from './pages/DashBoard';

function App() {
  let [color, setColor] = useState('#FFA3D1');
  const [userData, setUserData] = useState(null); //need the null otherwise return will not find props

  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch('https://randomuser.me/api/');
      const data = await res.json();
      const [user] = data.results;
      console.log(user);

      setTimeout(() => {
        setColor('#084B83');
      }, 5000);

      setUserData(user);
    }
    fetchAPI();
  }, []);

  return (
    <div>
      {userData && (
        <Header
          placeholder={'Search'}
          userName={userData.name.first}
          avatar={userData.picture.thumbnail}
        />
      )}
      <div style={styles.container}>
        <Nav style={styles.nav} />
        <main style={styles.main}>
          {userData && (
            <Routes>
              <Route path="/" element={<NewsFeed />} />
              <Route path="NewsFeed" element={<NewsFeed />} />
              <Route path="Messages" element={<Messages />} />
              <Route
                path="Settings"
                element={
                  <Settings
                    avatar={userData.picture.large}
                    firstName={userData.name.first}
                    lastName={userData.name.last}
                    userName={userData.login.username}
                    phone={userData.registered.phone}
                    password={userData.login.password}
                    streetNumber={userData.location.street.number}
                    streetName={userData.location.street.name}
                    city={userData.location.city}
                    state={userData.location.state}
                    postcode={userData.location.postcode}
                  />
                }
              />
              <Route path="DashBoard" element={<DashBoard />} />
            </Routes>
          )}
        </main>
        <aside style={styles.ads}>
          Advertisers
          <Advertisement1
            image={ad1}
            title={'Baby Sheild'}
            des={'Protection from oppsies!'}
            adAlt={'404'}
          />
          <h2 style={{ color: `${color}` }}>Banana.Chat</h2>
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
    width: '60%',
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
