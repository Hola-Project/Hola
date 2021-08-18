import React from 'react';
import './App.css';

import Home from './messanger';
import Login from './components/auth/login';
import Register from './components/auth/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import HeroSection from './components/HeroSection';

function App() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <Router>
      <Switch>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          {user ? <Redirect to='/' /> : <Register />}
        </Route>
        <Route exact path='/messenger'>
          <Home />
        </Route>
        <Route path='/' exact component={HeroSection} />
      </Switch>
    </Router>
  );
}

// function App() {
//   const { user } = useContext(AuthContext);
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/">
//           {user ? <Home /> : <Register />}
//         </Route>
//         <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
//         <Route path="/register">
//           {user ? <Redirect to="/" /> : <Register />}
//         </Route>
//         <Route path="/messenger">
//           {!user ? <Redirect to="/" /> : <Messenger />}
//         </Route>
//         <Route path="/profile/:username">
//           <Profile />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

export default App;
