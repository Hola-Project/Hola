import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';

import vedio from './assets/video/video.mp4';

function message() {
  return (
    <>
      <video src={vedio} autoPlay loop muted />

      <div className='app'>
        <div className='app__body'>
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default message;
