import Avatar from 'react-avatar';
import React from 'react';
import '../assets/Sidebarchat.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Sidebarchat({ convers, currentUser }) {
  const [user, setUser] = useState(null);
  const [status, setstatus] = useState([]);
  var retrievedObject = localStorage.getItem('testObject');
  let data_user = JSON.parse(retrievedObject);

  useEffect(() => {
    const getstatus = async () => {
      try {
        const res_status = await axios(
          `${process.env.REACT_APP_SERVER_URL}/getUnReadMessage/` + convers._id
        );
        setstatus(res_status.data);
        console.log(res_status.data);
      } catch (err) {
        console.log(err);
      }
    };
    getstatus();
  }, [convers]);

  useEffect(() => {
    const friendId = convers.members.find((m) => m !== currentUser?._id);
    console.log(friendId);
    const getUser = async () => {
      try {
        const res = await axios(
          `${process.env.REACT_APP_SERVER_URL}/getUsers?userId=` + friendId
        );
        setUser(res.data);
        console.log(convers);
      } catch (err) {
        console.log(err);
      }
    };

    getUser();
  }, [currentUser, convers]);

  const url = `${process.env.REACT_APP_SERVER_URL}/` + user?.img;
  return (
    <div class='Sidebarchat'>
      <Avatar src={url} round='100%' size='45px' name={user?.username} />
      <div className='Sidebarchat__info'>
        <h2>{user?.username}</h2>
      </div>
      {status[0]?.seen === false && status[0]?.sender !== data_user._id && (
        <span class='badge'>{status.length}</span>
      )}
    </div>
  );
}
