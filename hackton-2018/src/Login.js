import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import fire from './config/Fire';
import Home from './Home'
import App from './App'

class Login extends Component{

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(props);
    this.state = {
      email:'',
      password:''
    }
  }

  login(e) {
    e.preventDefault();
    let email=document.querySelector('#emailInput').value;
    let password=document.querySelector('#passwordInput').value;
    fire.auth().signInWithEmailAndPassword(email, password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e) {
    e.preventDefault();
    let email=document.querySelector('#emailInput').value;
    let password=document.querySelector('#passwordInput').value;
    fire.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  }

  render(){
    return(
      <div>
       <Container style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <Form >
            <FormGroup>
            <Label for="exampleEmail" >Email</Label>
            <Input type="email"  id="emailInput" placeholder="Enter email" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </FormGroup> <FormGroup>
              <Label for="exampleEmail">Password</Label>
              <Input type="password" id="passwordInput" placeholder="password" />
            </FormGroup>
          </Form>

         </Container>
        <Container >
          <Row>
            <Col xs="6">
              <Button block onClick={this.signup}>Sign up</Button>
            </Col>
            <Col xs="6">
              <Button onClick={this.login} color="success" block>Login</Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
};

export default Login;
