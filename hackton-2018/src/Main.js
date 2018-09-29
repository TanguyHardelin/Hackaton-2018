import React from 'react';
import { BrowserRouter as Router, Route, Link , Redirect } from "react-router-dom";
import LoginPage  from './LoginPage';
import Login from './Login';
import Home from './Home'
import CustomHistory from './CustomHistory'

class Main extends React.Component{

  render(){
    return(
      <Router history={CustomHistory}>
          <div>
              <Route path="/login" component={Login}/>
              <Route path="/app/home" component={Home}/>
              {/*<Redirect from="/" to="/login"/>*/}
          </div>
      </Router>
    )

  }
};

export default Main;
