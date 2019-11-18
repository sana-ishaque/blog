import React from 'react';
import './App.css';
import NavBar from './components/Layout/NavBar'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/' component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
