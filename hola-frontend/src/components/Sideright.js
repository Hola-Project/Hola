import React from 'react';
import '../assets/Sidebar.css';
//import { useContext } from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
//import { Avatar, IconButton } from '@material-ui/core';
// import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
// import { useHistory } from 'react-router-dom';
// import Sidebarchat from '../components/Sidebarchat';
// import Avatar from '../components/Avatar';
// import '../assets/Sidebarchat.css';
// import { useState, useEffect, useRef } from 'react';
// import axios from 'axios';

// export default function Sidebar(onlineUsers, currentId, setCurrentChat) {
//   const [friends, setFriends] = useState([]);
//   const [onlineFriends, setOnlineFriends] = useState([]);
//   const PF = process.env.REACT_APP_PUBLIC_FOLDER;

//   useEffect(() => {
//     const getFriends = async () => {
//       const res = await axios.get('http://localhost:8080/friends');
//       setFriends(res.data);
//       console.log(friends);
//     };

//     getFriends();
//   }, [currentId]);

//   //   useEffect(() => {
//   //     setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
//   //   }, [friends, onlineUsers]);

//   const handleClick = async (user) => {
//     try {
//       const res = await axios.get(
//         `http://localhost:8080/conv/find/${currentId}/${user._id}`
//       );
//       setCurrentChat(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   return (
//     <div className='test'>
//       <div className='Sidebar'>
//         <div className='Sidebar__search'>
//           <div className='Sidebar__searchContainer'>
//             <SearchOutlinedIcon color='gray' />
//             <input type='text' placeholder='Search ' id='test1' />
//           </div>
//         </div>
//         <div className='Sidebar__chat'>
//           {onlineFriends.map((o) => (
//             <div className='Sidebarchat' onClick={() => handleClick(o)}>
//               <Avatar />
//               <div className='Sidebarchat__info'>
//                 <h2>{o.username}</h2>
//               </div>
//             </div>
//           ))}
//           {/* <div className='Sidebarchat'>
//             <Avatar />
//             <div className='Sidebarchat__info'>
//               <h2>bushra</h2>
//             </div>
//           </div>

//           <div className='Sidebarchat'>
//             <Avatar />
//             <div className='Sidebarchat__info'>
//               <h2>Abed</h2>
//             </div>
//           </div>

//           <div className='Sidebarchat'>
//             <Avatar />
//             <div className='Sidebarchat__info'>
//               <h2>Deyaa</h2>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }
