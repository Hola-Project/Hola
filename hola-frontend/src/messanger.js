import React from 'react';
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import SidebarSearch from './components/SidebarSearch';


function message() {
  return (
    <div className='app'>
      <div className='app__header'>
        <Header />
      </div>
      <div className='app__body'>
      
        <Sidebar />
        
        <Chat />
        <SidebarSearch/>
      </div>
    </div>
  );
}

export default message;
