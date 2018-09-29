/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import fire from './config/Fire'
import db from './config/Firestore'

class ResearchCollaborators extends React.Component {

  constructor(props) {
    super(props);
    this.research = this.research.bind(this);
    this.state = {
      idUser: '',
      location: '',
      searchRequest: '',
      modal: false
    };
  }

  research(e) {
      e.preventDefault();
      let location = document.querySelector('#locationInput').value;
      let searchRequest = document.querySelector('#searchRequestInput').value;
      var user = fire.auth().currentUser;
      let uid = user.uid;

        db.collection("ResearchCollaborators").add({
            uid: uid,
            location: location,
            searchRequest: searchRequest
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }

  render() {
    return (
      <div>
          <Row>
            <Col xs="6">
              <FormGroup>
                <Input type="text"  id="searchRequestInput" placeholder="Que recherchez vous ? (Musiciens, chanteurs, peintres etc)" />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Input type="text"  id="locationInput" placeholder="Localisation recherchée" />
              </FormGroup>
            </Col>
            <Col xs="6">
              <Button color="primary" onClick={this.research}>Recherche</Button>
            </Col>
          </Row>
      </div>
    );
  }
}

export default ResearchCollaborators;
