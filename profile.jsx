import './profile.css'
import Navbar from "./components/navbar"
// import { Link } from 'react-router-dom'

import React from 'react';

const Profile = () => {
    return (
      <div className="profile-container">
        <div className="profile-picture">
          <img src="cat.jpg" alt="Cat" />
        </div>
        <div className="profile-details">
          <div className="input-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Profile;