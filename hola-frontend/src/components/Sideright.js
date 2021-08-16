import React from 'react';
import '../assets/Sidebar.css';
//import { useContext } from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { useHistory } from 'react-router-dom';
import Sidebarchat from '../components/Sidebarchat';
export default function Sidebar() {
  return (
    <div className='Sidebar'>
      <div className='Sidebar__search'>
        <div className='Sidebar__searchContainer'>
          <SearchOutlinedIcon color='gray' />
          <input type='text' placeholder='Search or Start new chat' />
        </div>
      </div>
      <div className='Sidebar__chat'>
        <h2>name </h2>
        <h2>name </h2>
        <h2>name </h2>
      </div>
    </div>
  );
}
