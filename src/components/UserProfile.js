// src/UserProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProfile.css'; // Create this file for CSS styles

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUserData(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card">
      {userData && (
        <div className="profile">
          <img src={userData.picture.large} alt="Profile" className="profile-image" />
          <div className="profile-details">
            <h2>{`${userData.name.first} ${userData.name.last}`}</h2>
            <p>Email: {userData.email}</p>
            <p>Gender: {userData.gender}</p>
            <p>Location: {userData.location.city}, {userData.location.country}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
