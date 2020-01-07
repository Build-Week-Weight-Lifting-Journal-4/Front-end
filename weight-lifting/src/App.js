import React, {useState} from 'react';
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
    </div>
  );
}

export default App;
