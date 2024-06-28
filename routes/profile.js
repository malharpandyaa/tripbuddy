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
