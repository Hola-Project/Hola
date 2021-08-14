import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import '../assets/Sidebarchat.css';
export class Sidebarchat extends Component {
  render() {
    return (
      <div class='Sidebarchat'>
        <Avatar />
        <div className='Sidebarchat__info'>
          <h2>Room name</h2>
          <p>this is the last message</p>
        </div>
      </div>
    );
  }
}

export default Sidebarchat;
