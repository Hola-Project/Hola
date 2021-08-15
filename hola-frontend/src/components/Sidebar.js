import React, { Component } from 'react';
import '../assets/Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { useHistory } from 'react-router-dom';

import Sidebarchat from '../components/Sidebarchat';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Sidebar() {
  let history = useHistory();
  var retrievedObject = localStorage.getItem('testObject');
  let data_user = JSON.parse(retrievedObject);
  console.log(data_user._id);
  const handleLogout = (e) => {
    history.push('/login');
  };
  const [convers, setconver] = useState([]);

  useEffect(() => {
    const getconvers = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/conv/${data_user._id}`
        );
        setconver(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getconvers();
  }, [data_user._id]);

  return (
    <div className='Sidebar'>
      <div className='Sidebar__header'>
        <Avatar />
        <div className='Sidebar__headerRight'>
          <button onClick={handleLogout}>log out </button>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='Sidebar__search'>
        <div className='Sidebar__searchContainer'>
          <SearchOutlinedIcon color='gray' />

          <input type='text' placeholder='Search or Start new chat' />
        </div>
      </div>
      <div className='Sidebar__chat'>
        {convers.map((e) => {
          return (
            <div>
              <Sidebarchat convers={e} currentUser={data_user} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
