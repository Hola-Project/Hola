import React from 'react';
import './App.css';

import Sidebar from './components/Sidebar';
import Header from './components/Header';

function message() {
  return (
    <div className='app'>
      <div className='app__body'>
        <Sidebar />
      </div>
    </div>
  );
}

export default message;
