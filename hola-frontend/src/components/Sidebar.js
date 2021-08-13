import React, { Component } from 'react';
import '../assets/Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import Sidebarchat from '../components/Sidebarchat';
export class sidebar extends Component {
  render() {
    return (
      <div className='Sidebar'>
        <div className='Sidebar__header'>
          <Avatar />
          <div className='Sidebar__headerRight'>
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
}

export default sidebar;
