import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import '../assets/Sidebarchat.css';
import { withAuth0 } from '@auth0/auth0-react';
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

export default withAuth0(Sidebarchat);
