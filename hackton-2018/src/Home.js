import React from 'react';
import fire from './config/Fire'
import App from './App'
import Login from './Login'

class Home extends React.Component{

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(props);
  }

  logout () {
    fire.auth().signOut();
  }

  render(){
    return(
        <div>
          <div>You are Home !</div>
          <button onClick={this.logout}>Logout</button>
        </div>
    )
  }
};

export default Home;
