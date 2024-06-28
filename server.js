// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/trip-match-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
const usersRoutes = require('./routes/users');
const tripsRoutes = require('./routes/profile');

app.use('/api/users', usersRoutes);
app.use('/api/trips', tripsRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});










// Profile.js (React component)

import React, { useState, useEffect } from 'react';

const Profile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data based on userId
    // Example API call with axios or fetch
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <h2>{user.username}'s Profile</h2>
      <p>Bio: {user.bio}</p>
      <p>Interests: {user.interests.join(', ')}</p>
      <img src={user.profilePicture} alt="Profile" />
    </div>
  );
};

export default Profile;

