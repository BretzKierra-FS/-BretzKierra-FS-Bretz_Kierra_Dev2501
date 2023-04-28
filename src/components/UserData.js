import React, { useState, useEffect } from 'react';


function UserData() {
    // State declare
    //common practice when changin state is perfered you use 'set'
    const [userData, setUserData] = useState([]);
  
    useEffect(() => {
      async function fetchAPI() {
        const res = await fetch('https://randomuser.me/api/');
        const data = await res.json();
        const [user] = data.results;
        console.log(user);
  
        setUserData(user);
      }
      fetchAPI();
    }, []);
  
    return (
    {userData}
    );
  }
  export default UserData;