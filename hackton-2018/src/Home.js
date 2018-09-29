import React from 'react';
import fire from './config/Fire'
import App from './App'
import Login from './Login'
import { Container, Row, Col } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ResearchCollaborators from './ResearchCollaborators'

class Home extends React.Component{

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      modal: false
    };
  }

  logout () {
    fire.auth().signOut();
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render(){
    return(
        <div>
          <div>You are Home !</div>
          <br/>
          <button onClick={this.logout}>Logout</button>
          <br/><br/>
          <Col xs="6">
              <Button color="danger" block>Recherche collaborateurs</Button>
          </Col>
          <br/>
          {' '}
          <Col xs="6">
            <ResearchCollaborators/>
          </Col>
        </div>
    )
  }
};

export default Home;
