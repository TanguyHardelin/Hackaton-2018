import React from 'react';
import { BrowserRouter as Router, Route, Link , Redirect } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import App from './App';
import UserProfile from './UserProfile'
import CustomHistory from './CustomHistory';

class Main extends React.Component{

  render(){
    return(
      <Router history={CustomHistory}>
          <div>
              <Route path="/login" component={Login}/>
              <Route path="/home" component={Home}/>
              <Route path="/profile" component={UserProfile}/>
              <Route path="/app" component={App}/>
              <Redirect from="/" to="/app"/>
          </div>
      </Router>
    )

  }
};

export default Main;
