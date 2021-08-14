import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon } from '@material-ui/icons';
import MoreVert from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import React, { Component } from 'react';
import '../assets/Chat.css';
import MicIcon from '@material-ui/icons/Mic';

export class Chat extends Component {
  render() {
    return (
      <div className='Chat'>
        <div className='Chat__header'>
          <Avatar />
          <div className='Chat__headerinfo'>
            <h3>Room name</h3>
            <p>Last seen at....</p>
          </div>
          <div className='Chat__headerRight'>
            <IconButton>
              <SearchOutlined />
            </IconButton>
            <IconButton>
              <AttachFile />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
        <div className='Chat__body'>
          <p className='Chat__message'>
            <span className='Chat__name'>Kafaween</span>
            this is a message
            <span className='Chat__time'>{new Date().toUTCString()}</span>
          </p>
          <p className='Chat__message Chat__reciever'>
            <span className='Chat__name'>Kafaween</span>
            this is a message
            <span className='Chat__time'>{new Date().toUTCString()}</span>
          </p>
          <p className='Chat__message'>
            <span className='Chat__name'>Kafaween</span>
            this is a message
            <span className='Chat__time'>{new Date().toUTCString()}</span>
          </p>
          <p className='Chat__message'>
            <span className='Chat__name'>Kafaween</span>
            this is a message
            <span className='Chat__time'>{new Date().toUTCString()}</span>
          </p>
          <p className='Chat__message'>
            <span className='Chat__name'>Kafaween</span>
            this is a message
            <span className='Chat__time'>{new Date().toUTCString()}</span>
          </p>
          <p className='Chat__message'>
            <span className='Chat__name'>Kafaween</span>
            this is a message
            <span className='Chat__time'>{new Date().toUTCString()}</span>
          </p>
          <p className='Chat__message'>
            <span className='Chat__name'>Kafaween</span>
            this is a message
            <span className='Chat__time'>{new Date().toUTCString()}</span>
          </p>
          <p className='Chat__message'>
            <span className='Chat__name'>Kafaween</span>
            this is a message
            <span className='Chat__time'>{new Date().toUTCString()}</span>
          </p>
          <p className='Chat__message'>
            <span className='Chat__name'>Kafaween</span>
            this is a message
            <span className='Chat__time'>{new Date().toUTCString()}</span>
          </p>
          <p className='Chat__message'>
            <span className='Chat__name'>Kafaween</span>
            this is a message
            <span className='Chat__time'>{new Date().toUTCString()}</span>
          </p>
          <p className='Chat__message'>
            <span className='Chat__name'>Kafaween</span>
            this is a message
            <span className='Chat__time'>{new Date().toUTCString()}</span>
          </p>
          <p className='Chat__message'>
            <span className='Chat__name'>Kafaween</span>
            this is a message
            <span className='Chat__time'>{new Date().toUTCString()}</span>
          </p>
          <p className='Chat__message'>
            <span className='Chat__name'>Kafaween</span>
            this is a message
            <span className='Chat__time'>{new Date().toUTCString()}</span>
          </p>
          <p className='Chat__message'>
            <span className='Chat__name'>Kafaween</span>
            this is a message
            <span className='Chat__time'>{new Date().toUTCString()}</span>
          </p>
        </div>
        <div className='Chat__footer'>
          <InsertEmoticon />
          <form>
            <input type='text' placeholder='Type a message' />
            <button type='submit'>Send a message</button>
          </form>
          <MicIcon />
        </div>
      </div>
    );
  }
}

export default Chat;
