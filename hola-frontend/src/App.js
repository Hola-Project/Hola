import React from 'react';
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/auth/login';
import LogoutButton from './components/auth/logout';

function App() {
  const { user, isAuthenticated } = useAuth0();
  console.log(useAuth0());
  console.log(user);

  return (
    <div className='app'>
      <div>
        <LoginButton />
        <LogoutButton />
      </div>
      <div className='app__header'>
        <Header />
      </div>
      <div className='app__body'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
