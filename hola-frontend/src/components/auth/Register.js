import axios from 'axios';
import { useRef } from 'react';
import './register.css';

import { useHistory } from 'react-router-dom';

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const img = useRef();
  let history = useHistory();
  const formData = new FormData();
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(e.target.img.files[0]);
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      formData.append('img',e.target.img.files[0]);
      formData.append('username',username.current.value);
      formData.append('email',email.current.value);
      formData.append('password',password.current.value);
     
      console.log(formData);
      // const user = {
      //   username: username.current.value,
      //   email: email.current.value,
      //   password: password.current.value,
      //   img: e.target.img.files[0]
      // };

      
      

      try {
       const data =  await axios.post('http://localhost:8080/register', formData);
       console.log(data);
        history.push('/login');
      } catch (err) {
        console.log(err);
      }
    }
  };

  const gotologin = (e) => {
    e.preventDefault();
    history.push('/login');
  };

  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>Hola</h3>
          <span className='loginDesc'>
            Connect with friends and the world around you on Hola.
          </span>
        </div>
        <div className='loginRight'>
          <form className='loginBox' onSubmit={handleClick}>
            <input
              placeholder='Username'
              required
              ref={username}
              className='loginInput'
            />
            <input
              placeholder='Email'
              required
              ref={email}
              className='loginInput'
              type='email'
            />
            <input
              placeholder='Password'
              required
              ref={password}
              className='loginInput'
              type='password'
              minLength='6'
            />
            <input
              placeholder='Password Again'
              required
              ref={passwordAgain}
              className='loginInput'
              type='password'
            />

            <input  type='file' name='img' id="img" />

            <button className='loginButton' type='submit'>
              Sign Up
            </button>
            <button className='loginRegisterButton' onClick={gotologin}>
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
