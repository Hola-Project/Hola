import React from 'react';
import '../assets/sideright.css';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { useHistory } from 'react-router-dom';
import Sidebarchat from '../components/Sidebarchat';
import Avatar from '../components/Avatar';
// import '../assets/Sidebarchat.css';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function Sideright({ currentId, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get('http://localhost:8080/friends');
      setFriends(res.data);
      console.log(friends);
    };

    getFriends();
  }, [currentId]);

  // useEffect(() => {
  //   setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  // }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    console.log(currentId);
    console.log(user._id);
    let mem = {
      senderId: currentId,
      receiverId: user._id,
    };
    try {
      const res = await axios.post(`http://localhost:8080/addcon`, mem);
      console.log(res.data);
      setCurrentChat(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='test'>
      <div className='Sidebar'>
        <div className='Sidebar__search'>
          <div className='Sidebar__searchContainer'>
            <SearchOutlinedIcon color='gray' />
            <input type='text' placeholder='Search ' id='test1' />
          </div>
        </div>
        <div id='scroll'>
          {friends.map((o) => (
            <div className='Sidebarchat' onClick={() => handleClick(o)}>
              <Avatar />
              <div className='Sidebarchat__info'>
                <h2>{o.username}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
