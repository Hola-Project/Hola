// import { Avatar, IconButton } from '@material-ui/core';
// import { AttachFile, InsertEmoticon } from '@material-ui/icons';
// import MoreVert from '@material-ui/icons/MoreVert';
// import SearchOutlined from '@material-ui/icons/SearchOutlined';
// import axios from 'axios';
// import React, { Component } from 'react';
// import '../assets/Chat.css';
// import Message from "./message"
// import MicIcon from '@material-ui/icons/Mic';
// import { useEffect, useState,useRef } from 'react';
// export default function Chat() {
//   const [currentChat, setCurrentChat] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [conversations, setConversations] = useState([]);
//   const scrollRef = useRef();
//   var retrievedObject = localStorage.getItem('testObject');
//   let data_user = JSON.parse(retrievedObject);
//   useEffect(() => {
//     const getMessages = async () => {
//       try {
//         const res = await axios.get("http://localhost:8080/message/" + currentChat?._id);
//         setMessages(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getMessages();
//   }, [currentChat]);


// console.log(currentChat);

//     return (
//       <div>
//       {currentChat ? 
//         <>
//       <div className='Chat'>
//         <div className='Chat__header'>
//           <Avatar />
//           <div className='Chat__headerinfo'>
//             <h3>Room name</h3>
//             <p>Last seen at....</p>
//           </div>
//           <div className='Chat__headerRight'>
//             <IconButton>
//               <SearchOutlined />
//             </IconButton>
//             <IconButton>
//               <AttachFile />
//             </IconButton>
//             <IconButton>
//               <MoreVert />
//             </IconButton>
//           </div>
//         </div>
//         <div className='Chat__body'>
//           <p className='Chat__message'>
//             <span className='Chat__name'>Kafaween</span>
//             this is a message
//             <span className='Chat__time'>{new Date().toUTCString()}</span>
//           </p>

//           {messages.map((m) => (
//                     <div ref={scrollRef}>
//                       <Message message={m} own={m.sender === data_user._id} />
//                     </div>
//                   ))}
//         </div>
//         <div className='Chat__footer'>
//           <InsertEmoticon />
//           <form>
//             <input type='text' placeholder='Type a message' />
//             <button type='submit'>Send a message</button>
//           </form>
//           <MicIcon />
//         </div>
//       </div>
//       </> : <span class = "noConversationText"> Open  a conversation to start a chat</span>
//     }
//     </div>
//     );
  
// }

