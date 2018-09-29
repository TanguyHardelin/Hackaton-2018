import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import fire from './config/Fire';
import Home from './Home'
import Login from './Login'

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      user:{},
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
  fire.auth().onAuthStateChanged((user) => {
    //console.log(user);
    if (user) {
      this.setState({ user });
      //localStorage.setItem('user', user.uid);
    } else {
      this.setState({ user: null });
      //localStorage.removeItem('user');
    }
  });
}

  render(){
    return(
      <div>
       {this.state.user ? ( <Home/> ) : ( <Login/> )}
      </div>
    )

  }
};// TEST

export default App;
