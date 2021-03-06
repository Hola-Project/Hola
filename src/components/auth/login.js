import { useRef } from 'react';
import './login.css';
import { loginCall } from '../../apiCalls';

import { useHistory } from 'react-router-dom';

export default function Login() {
  const email = useRef();
  const password = useRef();
  let history = useHistory();
  let data;
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      history,
      data
    );
    console.log(data);
  };
  const gotoregister = (e) => {
    history.push('/register');
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
          <form className='loginBox'>
            <input
              placeholder='Email'
              type='email'
              className='loginInput'
              ref={email}
            />
            <input
              placeholder='Password'
              type='password'
              minLength='6'
              className='loginInput'
              ref={password}
            />
            <button className='loginButton' type='submit' onClick={handleClick}>
              Log In
            </button>
            <span className='loginForgot'>Forgot Password?</span>
            <button className='loginRegisterButton' onClick={gotoregister}>
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
