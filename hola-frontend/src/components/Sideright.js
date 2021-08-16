import React from 'react';
import '../assets/Sidebar.css';
//import { useContext } from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
//import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { useHistory } from 'react-router-dom';
import Sidebarchat from '../components/Sidebarchat';
import Avatar from '../components/Avatar';
import '../assets/Sidebarchat.css';

export default function Sidebar() {
  return (
    <div className='test'>
    <div className='Sidebar'>
      <div className='Sidebar__search'>
        <div className='Sidebar__searchContainer'>
          <SearchOutlinedIcon color='gray' />
          <input type='text' placeholder='Search ' id='test1' />
        </div>
      </div>
      <div className='Sidebar__chat'>
        
        <div className='Sidebarchat'> 
        <Avatar />
        <div className='Sidebarchat__info'>
        <h2>Qusai</h2>
      </div>
      </div>

      <div className='Sidebarchat'> 
        <Avatar />
        <div className='Sidebarchat__info'>
        <h2>bushra</h2>
      </div>
      </div>


      <div className='Sidebarchat'> 
        <Avatar />
        <div className='Sidebarchat__info'>
        <h2>Abed</h2>
      </div>
      </div>


      <div className='Sidebarchat'> 
        <Avatar />
        <div className='Sidebarchat__info'>
        <h2>Deyaa</h2>
        
      </div>
      </div>



      </div>
    </div>
    </div>
  );
}
