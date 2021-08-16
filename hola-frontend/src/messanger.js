import React from 'react';
import './App.css';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Sideright from './components/Sideright';

function message() {
  return (
    <div className='app'>
      <div className='app__body'>
        <Sidebar />
        <Sideright />
      </div>
    </div>
  );
}

export default message;
