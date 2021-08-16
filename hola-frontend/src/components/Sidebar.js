import React, { Component } from 'react';
import '../assets/Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { useHistory } from 'react-router-dom';
import Sidebarchat from '../components/Sidebarchat';
import axios from 'axios';
import { AttachFile, InsertEmoticon } from '@material-ui/icons';
import MoreVert from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import '../assets/Chat.css';
import Message from "./message"
import MicIcon from '@material-ui/icons/Mic';
import { useState, useEffect,useRef } from 'react';

export default function Sidebar() {


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
  const [newMessage, setNewMessage] = useState("");
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
  console.log(currentChat);
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("http://localhost:8080/message/" + currentChat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
  
    getMessages();
  }, [currentChat]);
 
  

console.log(currentChat);

const handleSubmit = async (e) => {
  e.preventDefault();
  const message = {
    sender: data_user._id,
    text: newMessage,
    conversationId: currentChat._id,
  };

  try {
    const res = await axios.post("http://localhost:8080/send", message);
    setMessages([...messages, res.data]);
    setNewMessage("");
  } catch (err) {
    console.log(err);
  }
};
  

useEffect(() => {
  scrollRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages]);
  return (
    <>
    <div className='Sidebar'>
      <div className='Sidebar__header'>
        <Avatar />
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
          return (
            <div onClick={() =>  setCurrentChat(e) } >
              <Sidebarchat convers={e} currentUser={data_user}  />
            </div>
          );
        })}
      </div>
    </div>
   
    {currentChat ? 
      <>
    <div className='Chat'>
      <div className='Chat__header'>
        <Avatar />
        <div className='Chat__headerinfo'>
          <h3>persone</h3>
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
        {messages.map((m) => (
                  <div ref={scrollRef}>
                    <Message message={m}  own={m.sender === data_user._id} />
                  </div>
                ))}
      </div>
      <div className='Chat__footer'>
        <InsertEmoticon />
        <form>
          <input type='text'  className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage} />
          <button type='submit' onClick={handleSubmit}>Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
    </> : <span class = "noConversationText"> Open  a conversation to start a chat</span>
  }
 
  </>
  );
}
