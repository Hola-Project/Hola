import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import '../assets/Sidebarchat.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Sidebarchat({ convers, currentUser }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const friendId = convers.members.find((m) => m !== currentUser._id);
    const getUser = async () => {
      try {
        const res = await axios(
          'http://localhost:8080/getUsers?userId=' + friendId
        );
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    
    getUser();
  }, [currentUser, convers]);
 

  return (
    <div class='Sidebarchat'>
      <Avatar />
      <div className='Sidebarchat__info'>
        <h2>{user?.username}</h2>

      </div>
    </div>
  );
}
