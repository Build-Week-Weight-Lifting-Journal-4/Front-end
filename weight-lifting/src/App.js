import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Dashboard from './components/Dashboard'
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import SignupForm from './components/SignUp'
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
            <Route exact path='/' component={SignupForm}/>
            <Route exact path='/login' component={Login}/>
          <PrivateRoute path="/dashboard" component={Dashboard}/>
        </Switch>
      </div>
    </BrowserRouter>

  );
}


export default App;
