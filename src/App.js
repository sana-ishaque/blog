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
import ProjectDetails from './components/Projects/ProjectDetails';
import SignIn from './components/Authentication/SignIn';
import SignUp from './components/Authentication/SignUp';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route  path='/project/:id' component={ProjectDetails} />
          <Route  path='/signin' component={SignIn} />
          <Route  path='/signup' component={SignUp} />



        </Switch>
      </div>
    </Router>
  );
}

export default App;