import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import SignupForm from './components/SignUp';

function App() {
  
  const [users, setNewUser] = useState([]);

  const addNewUser = user => {
    const newUser = {
      id: `${users.length+1}`,
      name: user.name,
      username: user.username,
      password: user.username
    };
    setNewUser([...users, newUser]);
  };
  
  
  return (
    <div className="App">
      
      <SignupForm setNewUser={addNewUser}/>
      <Login checkLogin={checkLogin}/>
    </div>
  );
}

export default App;
