/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import fire from './config/Fire'
import db from './config/Firestore'

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.signup = this.signup.bind(props);
    this.state = {
      firstName: '',
      LastName: '',
      sexe:'',
      age:'',
      city:'',
      vocations:'',
      mobility:'',
      phone:'',
      email:'',
      password:'',
      image: null,
      modal: false
    };
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  signup(e) {
      e.preventDefault();

      let firstName = document.querySelector('#firstNameInput').value;
      let lastName = document.querySelector('#LastNameInput').value;
      let gender = document.querySelector('#genderInput').value;
      let age = document.querySelector('#ageInput').value;
      let city = document.querySelector('#cityInput').value;
      let vocations = document.querySelector('#vocationInput').value;
      let mobility = document.querySelector('#mobilityInput').value;
      let phone = document.querySelector('#phoneNumberInput').value;
      let email = document.querySelector('#emailInputSignUp').value;
      let password = document.querySelector('#passwordInputSignUp').value;
      
      fire.auth().createUserWithEmailAndPassword(email, password).then(
        // Add a new document in collection "utilisateurs"
        // Add a new document with a generated id.
        db.collection("Users").add({
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            age: age,
            city: city,
            vocations: vocations,
            mobility: mobility,
            phone: phone,
            email: email,
            password: password,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        })
      )
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

  render() {
    return (
      <div>
          <ModalHeader toggle={this.toggle}>Inscription</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Input type="text"  id="firstNameInput" placeholder="Prénom" />
              </FormGroup>

              <FormGroup>
                <Input type="text" id="LastNameInput" placeholder="Nom" />
              </FormGroup>

              <FormGroup>
                <Input type="text" id="genderInput" placeholder="Sexe" />
              </FormGroup>

              <FormGroup>
                <Input type="number" id="ageInput" placeholder="Age" />
              </FormGroup>

              <FormGroup>
                <Input type="text" id="cityInput" placeholder="Ville"/>
              </FormGroup>

              <FormGroup>
                <Input type="text" id="vocationInput" placeholder="Vocation(s) (ex : musicien, chanteur, peintre, danseur etc.)" />
              </FormGroup>

              <FormGroup>
                <Input type="text" id="mobilityInput" placeholder="Mobilité (fixe / itinérant)" />
              </FormGroup>

              <FormGroup>
                <Input type="tel" id="phoneNumberInput" placeholder="Numéro de téléphone" />
              </FormGroup>

              <FormGroup>
                <Input type="email"  id="emailInputSignUp" placeholder="email@example.com" />
                <small id="emailHelp" class="form-text text-muted">Votre email ne sera utilisé dans aucun autre contexte.</small>
              </FormGroup>

              <FormGroup>
                <Input type="password" id="passwordInputSignUp" placeholder="Mot de passe" />
              </FormGroup>

              <FormGroup>
                <Input type="password" id="passwordConfirmationInput" placeholder="Confirmez votre mot de passe" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.signup}>Sign up</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
      </div>
    );
  }
}

export default SignUpModal;
