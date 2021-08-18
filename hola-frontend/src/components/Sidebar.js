import React, { Component } from 'react';
import '../assets/Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import Avatar from 'react-avatar';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { useHistory } from 'react-router-dom';
import Sidebarchat from '../components/Sidebarchat';
import axios from 'axios';
import { AttachFile, InsertEmoticon } from '@material-ui/icons';
import MoreVert from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import '../assets/Chat.css';
import Message from './message';
import MicIcon from '@material-ui/icons/Mic';
import { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import Sideright from './Sideright';
import Picker from 'emoji-picker-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Sidebar() {
  const socket = useRef();
  const scrollRef = useRef();
  let history = useHistory();
  var retrievedObject = localStorage.getItem('testObject');
  let data_user = JSON.parse(retrievedObject);
  const handleLogout = (e) => {
    history.push('/login');
  };

  const [convers, setconver] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [arrivalMessage, setArrivalMessage] = useState(null);
  // const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    socket.current = io('ws://localhost:9000');
    socket.current.on('getMessage', (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit('addUser', data_user._id);
    socket.current.on('getUsers', (users) => {
      // console.log(users);
    });
  }, [data_user]);

  useEffect(() => {
    const getconvers = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/conv/${data_user._id}`
        );
        setconver(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getconvers();
  }, [data_user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          'http://localhost:8080/message/' + currentChat?._id
        );
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: data_user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== data_user._id
    );

    socket.current.emit('sendMessage', {
      senderId: data_user._id,
      receiverId: receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post('http://localhost:8080/send', message);
      setMessages([...messages, res.data]);
      setNewMessage('');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const updateStatus = async (e) => {
    try {
      const res = await axios.put(
        'http://localhost:8080/updateStatus/' + e?._id
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className='Sidebar'>
        <div className='Sidebar__header'>
          <Avatar
            src={'http://localhost:8080/' + data_user.img}
            round='100%'
            size='45px'
            name={data_user.username}
          />
          <div className='Sidebar__headerRight'>
            <button onClick={handleLogout}>log out </button>
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
          {convers.map((e) => {
            console.log(e._id);
            return (
              <div
                onClick={() => {
                  setCurrentChat(e);
                  updateStatus(e);
                }}
              >
                <Sidebarchat convers={e} currentUser={data_user} />
              </div>
            );
          })}
        </div>
      </div>

      {currentChat ? (
        <>
          <div className='Chat'>
            <div className='Chat__header'>
              <div className='Chat__headerinfo'>
                <h3>Private Chat</h3>
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
              {messages.map((m) => (
                <div ref={scrollRef}>
                  <Message message={m} own={m.sender === data_user._id} />
                </div>
              ))}
            </div>
            <div className='Chat__footer'>
              <InsertEmoticon />
              <form>
                <input
                  type='text'
                  className='chatMessageInput'
                  placeholder='write something...'
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                />
                <button type='submit' onClick={handleSubmit}>
                  Send a message
                </button>
              </form>
              <MicIcon />
            </div>
          </div>
        </>
      ) : (
        <div className='Chat'>
          <div className='Chat__header'>
            <div className='Chat__headerinfo'>
              <h3>Private Chat</h3>
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
            <h3>Click on chat</h3>
          </div>
          <div className='Chat__footer'>
            {/* <InsertEmoticon />
            <form>
              <input
                type='text'
                className='chatMessageInput'
                placeholder='write something...'
              />
            </form>
            <MicIcon /> */}
          </div>
        </div>
      )}
      <Sideright
        // onlineUsers={onlineUsers}
        currentId={data_user._id}
        setCurrentChat={setCurrentChat}
      />
    </>
  );
}
