import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Dashboard from './components/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Dashboard}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
