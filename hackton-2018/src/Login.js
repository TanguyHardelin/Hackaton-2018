import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import fire from './config/Fire';
import Home from './Home'
import App from './App'
import SignUpModal from './SignUpModal'

class Login extends Component{

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      email:'',
      password:'',
      modal: false
    }
  }

  login(e) {
    e.preventDefault();
    let email = document.querySelector('#emailInput').value;
    let password = document.querySelector('#passwordInput').value;
    fire.auth().signInWithEmailAndPassword(email, password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render(){
    return(
      <div>
        
       <Container style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
        
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <img src="/images/Logo_v2_2.png" style={{width:'400px',height:'400px',margin:'auto'}}/>
          <h3 style={{width:'100px',height:'10px',margin:'auto'}}>EurekArt</h3>
        </div>
          <Form >
            <FormGroup>
            <Label for="exampleEmail" >Email</Label>
            <Input type="email"  id="emailInput" placeholder="Email" />
          </FormGroup>
          <FormGroup>
              <Label for="exampleEmail">Mot de passe</Label>
              <Input type="password" id="passwordInput" placeholder="Mot de passe" />
            </FormGroup>
          </Form>

         </Container>
        <Container >
          <Row>
            <Col xs="6">
                <Button color="danger" block onClick={this.toggle}>Inscription</Button>
            </Col>
            {/* <Col xs="6">
              <Button block onClick={this.signup}>Sign up</Button>
            </Col> */}
            <Col xs="6">
              <Button onClick={this.login} color="success" block>Connexion</Button>
            </Col>
          </Row>
        </Container>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <SignUpModal />
        </Modal>
      </div>
    )
  }
};

export default Login;
