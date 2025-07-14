// src/components/UserProfile.jsx
import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = () => {
  const { Name, age, bio } = useContext(UserContext);

  return (
    <div>
      <h2>{Name}</h2>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default UserProfile;
// file modified