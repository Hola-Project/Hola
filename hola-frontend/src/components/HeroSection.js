import React from 'react';

import { Button } from './Button';
import '../assets/HeroSection.css';
import vedio from '../assets/video/video.mp4';
import Navbar from './Navbar';
function HeroSection() {
  return (
    <>
      <Navbar />
      <div className='hero-container'>
        <video src={vedio} autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
