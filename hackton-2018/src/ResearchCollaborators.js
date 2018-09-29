/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Map, TileLayer, Marker,Popup ,DivOverlay } from 'react-leaflet';
import fire from './config/Fire'
import db from './config/Firestore'
import L from 'leaflet';

class ResearchCollaborators extends React.Component {

  constructor(props) {
    super(props);
    this.post = this.post.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.state = {
      idUser: '',
      location: '',
      searchRequest: '',
      marker:new Array(),
      latitude: '',
      longitude: '',
      modal: false
    };

    this.icon= new L.Icon({
        iconUrl: '/images/poi.png',
        iconSize: new L.Point(30, 30),
        className: 'leaflet-div-icon'
      }
    );
  }

  post(e) {
      e.preventDefault();
      let category = document.querySelector('#categoryInput').value;
      let speciality = document.querySelector('#specialityInput').value;
      let style = document.querySelector('#styleInput').value;

      var user = fire.auth().currentUser;
      let uid = user.uid;

      let latitude = ''; // todo
      let longitude = ''; // todo

        db.collection("Posts").add({
            uid: uid,
            category: category,
            speciality: speciality,
            style: style,
            latitude: this.latitude,
            longitude: this.longitude
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
    handleMapClick(e){

        let latlng=e.latlng;
        this.latitude = latlng.lat;
        this.longitude = latlng.lng;

        if(this.state.marker.length<1)
            this.state.marker.push([latlng.lat,latlng.lng]);
        else{
            this.state.marker[0]=[latlng.lat,latlng.lng];
        }
        this.setState(this.state);
    }

  render() {
    return (
      <div>

        <Container fluid>
            <Form>

                <FormGroup>
                    <Label for="exampleSelect">Catégories</Label>
                    <Input type="select" name="select" id="categoryInput">
                        <option>Musicien</option>
                        <option>Peintre</option>
                        <option>Acteur</option>
                        <option>Photographe</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="specialityInput">Spécialité</Label>
                    <Input type="text" id="specialityInput" placeholder="Specialitée" />
                </FormGroup>

                <FormGroup>
                    <Label for="styleInput">Style</Label>
                    <Input type="text" id="styleInput" placeholder="style" />
                </FormGroup>

                <Label for="mapForm">Localisation</Label>
                <Map id='mapForm' center={[48.42333164, -71.055499778]} zoom={10} zoomControl={false} style={{with:'200px',height:'200px'}} onclick={this.handleMapClick}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    {this.state.marker.map((e)=>(
                        <Marker position={e} icon={this.icon}></Marker>
                    ))}

                </Map>
            </Form>

        </Container>
        <p>    </p>
        <Button color='success' block onClick={this.post}>Publier une annonce</Button>

      </div>
    );
  }
}

export default ResearchCollaborators;
