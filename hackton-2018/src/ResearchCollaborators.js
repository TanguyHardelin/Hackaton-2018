/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Map, TileLayer, Marker,Popup ,DivOverlay } from 'react-leaflet';
import fire from './config/Fire'
import db from './config/Firestore'
import L from 'leaflet';
import Home from './Home'

/*
    <option>Blues</option>
                        <option>Drum and bass</option>
                        <option>Dubstep</option>
                        <option>Electronique</option>
                        <option>Folk</option>
                        <option>Funk</option>
                        <option>Gospel</option>
                        <option>Heavy metal</option>
                        <option>Jazz</option>
                        <option>Classique</option>
                        <option>Country</option>
                        <option>Instrumentale</option>
                        <option>Latine</option>
                        <option>House</option>
                        <option>Techno</option>
                        <option>Pop</option>
                        <option>Soul</option>
                        <option>Rap</option>
                        <option>Rock</option>
                        <option>Reggae</option>
                        <option>RnB</option>
*/
/*
<option>Guitare acoustique</option>
                        <option>Guitare électrique</option>
                        <option>Guitare classique</option>
                        <option>Basse</option>
                        <option>Ukulélé</option>
                        <option>Banjo</option>
                        <option>Contrebasse</option>
                        <option>Batterie</option>
                        <option>D'jembé</option>
                        <option>Xylophone</option>
                        <option>Piano</option>
                        <option>Clavecin</option>
                        <option>Harmonica</option>
                        <option>Synthétiseur</option>
                        <option>Accordéons</option>
                        <option>Triangle</option>
                        <option>Trompette</option>
                        <option>Flûte</option>
                        <option>Saxophone</option>
                        <option>Clarinette</option>
                        <option>DJ</option>
                    </Input>
*/

/*
<option>Blues</option>
                        <option>Drum and bass</option>
                        <option>Dubstep</option>
                        <option>Electronique</option>
                        <option>Folk</option>
                        <option>Funk</option>
                        <option>Gospel</option>
                        <option>Heavy metal</option>
                        <option>Jazz</option>
                        <option>Classique</option>
                        <option>Country</option>
                        <option>Instrumentale</option>
                        <option>Latine</option>
                        <option>House</option>
                        <option>Techno</option>
                        <option>Pop</option>
                        <option>Soul</option>
                        <option>Rap</option>
                        <option>Rock</option>
                        <option>Reggae</option>
                        <option>RnB</option>
                    </Input>
                */
class ResearchCollaborators extends React.Component {

  constructor(props) {
    super(props);

    this.post = this.post.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);

    this.state = {
      idUser: '',
      userfirstname: '',
      userlastname: '',
      userage: '',
      userimageurl: '',
      location: '',
      searchrequest: '',
      marker:new Array(),
      latitude: '',
      longitude: '',
      modal: false
    };

    this.icon= new L.Icon({
        iconUrl: '/images/poi.png',
        iconSize: new L.Point(40, 40)
      }
    );
  }

  post(e) {

      e.preventDefault();
      let self=this;


      var user = fire.auth().currentUser;
      //console.log(user.uid);
      var docRef = db.collection("Users").where("email", "==", user.email);

      db.collection("Users").where("email", "==",  user.email)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            let category = document.querySelector('#categoryInput').value;
            let speciality = document.querySelector('#specialityInput').value;
            let style = document.querySelector('#styleInput').value;
            let descriptif = document.querySelector('#descriptifInput').value;
            let remuneration = document.querySelector('#remunerationInput').value ||'0';
            let xp = document.querySelector('#xpInput').value;;
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              docRef = doc.data();
              console.log(docRef);
              self.userfirstname = docRef.firstName;
              self.userlastname = docRef.lastName;
              self.userage = docRef.age;
              self.userimageurl = docRef.imageurl || ' ';
              // this.userAge = docRef.age;
              // this.userimageurl = docRef.imageurl;
              // console.log("USERFIRSTNAME : "+this.userfirstname);
              console.log( self.userfirstname +" "+   self.userlastname);

              //self.setState(self.state);

              db.collection("Posts").add({
                  // uid: user.uid,
                  userFirstName: self.userfirstname,
                  userLastName: self.userlastname,
                  userAge: self.userage,
                  userimageurl: self.userimageurl,
                  latitude: self.latitude,
                  longitude: self.longitude,
                  category: category,
                  speciality: speciality,
                  style: style,
                  descriptif: descriptif,
                  remuneration: remuneration,
                  xp: xp
              })
              .then(function(docRef) {
                  console.log("Document written with ID: ", docRef.id);
              })
              .catch(function(error) {
                  console.error("Error adding document: ", error);
              });
          });
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });

      this.props.updateMarker();
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
                  <br/>
                    <Label for="exampleSelect">Profil recherché</Label>
                    <Input type="select" name="select" id="categoryInput">
                        <option>Musicien</option>
                        <option>Chanteur</option>
                        <option>Peintre</option>
                        <option>Sculpteur</option>
                        <option>Audiovisuel</option>
                        <option>Comédien</option>
                    </Input>
                    <FormGroup>
                      <br/>
                      <Label for="exampleSelect">Niveau d'expérience recherché</Label>
                        <Input type="text" id="xpInput" placeholder="Ex : tout niveau, intermédiaire, expert..." />
                    </FormGroup>
                    <Input type="text" id="specialityInput" placeholder="Specialité" />
                </FormGroup>

                <FormGroup>
                    <Input type="text" id="styleInput" placeholder="Style" />
                </FormGroup>

                <FormGroup>
                    <Input type="text" id="descriptifInput" placeholder="Texte descriptif de votre annonce" />
                </FormGroup>

                <FormGroup>
                    <Label>Rémunération</Label>
                    <Input type="number" id="remunerationInput"/>
                </FormGroup>

                <Label for="mapForm">Selectionnez une position sur la carte :</Label>
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
