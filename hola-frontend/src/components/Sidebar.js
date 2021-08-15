import React, { Component } from 'react';
import '../assets/Sidebar.css';
import { useContext } from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Sidebarchat from '../components/Sidebarchat';

export default function Sidebar() {
  let history = useHistory();
  var retrievedObject = localStorage.getItem('testObject');
  let data_user = JSON.parse(retrievedObject);
  console.log(data_user);
  const handleLogout = (e) => {
    history.push('/login');
  };

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
        <Sidebarchat />
        <Sidebarchat />
        <Sidebarchat />
      </div>
    </div>
  );
}
