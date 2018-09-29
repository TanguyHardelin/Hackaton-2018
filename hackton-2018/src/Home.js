import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Map, TileLayer, Marker,Popup ,DivOverlay } from 'react-leaflet';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Modal, TabContent, TabPane,  Card, CardTitle, CardText } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Media } from 'reactstrap';
import classnames from 'classnames';
import L from 'leaflet';
import { BrowserRouter as Router, Route, Link , Redirect } from "react-router-dom";
import db from './config/Firestore'
import UserProfileModification from './UserProfileModification'
import UserProfile from './UserProfile'

// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import ResearchCollaborators from './ResearchCollaborators'
// import Login from './Login'
// import fire from './config/Fire'
// import App from './App'


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import MyNavBar from './MyNavBar';


const mapCenter = [48.42333164, -71.055499778];
const zoomLevel = 10;

class Home extends React.Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.updateMarker = this.updateMarker.bind(this);
    this.state = {
      activeTab: '1',
      dropdownOpen: false,
      modal: false,
      users: [],
      markers:new Array(),
      userProfileModification:false
    };

    this.activeTab='1';
    this.dropdownOpen=false


    this.toggleModalUser=this.toggleModalUser.bind(this);
    this.updateState=this.updateState.bind(this);
    this.modifyUser=this.modifyUser.bind(this)

    this.icon= new L.Icon({
        iconUrl: '/images/poi.png',
        iconSize: new L.Point(30, 30),
        className: 'leaflet-div-icon',
        userRedirect:true
      }
    );

    setInterval(this.updateMarker,500);
    setInterval(this.updateState,500);
  }
  updateMarker(){
    //TODO get info from API
    let self=this;
    db.collection("Posts").get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {

            // console.log(doc.id, " => ", doc.data());
            //  console.log( "category : " + doc.data().category);
                let pos=[doc.data().latitude, doc.data().longitude];
                console.log("pos : "+ pos);
              //  pos = [48.39820893678183, -71.15295410156251]
                let image_url='/images/poi.png'

                switch(doc.data().category) {
                    case "Peintre":
                          image_url = "/images/paint.svg"
                          break;
                    case "Musicien":
                          image_url = "/images/note.svg"
                          break;
                    case "Acteur":
                          image_url = "/images/actor.svg"
                          break;
                    case "Photographe":
                          image_url = "/images/note.svg"
                          break;
                    case "Chanteur":
                          image_url = "/images/sing.svg"
                          break;
                    case "Sculpteur":
                          image_url = "/images/sculptor.svg"
                          break;
                    case "Realisateur":
                          image_url = "/images/clapboard.svg"
                          break;
                    default:
                          break;
                }

                let icon=new L.Icon({
                    iconUrl: image_url,
                    popupAnchor: null,
                    shadowUrl: null,
                    iconSize: new L.Point(60, 60),
                    className: 'leaflet-div-icon'
                  }
                );

                self.state.markers.push({icon:icon,pos:pos})
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }

  updateState(){
    console.log('UPDATE STATE')
    this.setState(this.state);
  }

  toggle(tab) {
    console.log(tab);
    if (this.state.activeTab !== tab) {

      this.state.activeTab= tab
    }
  }
  toggleModalUser(){
    this.state.modal=!this.state.modal;
  }
  toggleDropdown(){
    this.state.dropdownOpen=!this.state.dropdownOpen;
  }
  modifyUser(){
    this.state.userProfileModification=!this.state.userProfileModification;
  }

  render(){
    return(
        <div>
          <MyNavBar getUserInformation={this.toggleModalUser}/>
          <Nav justified fill pills>
            <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>
                Carte
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>
                Liste
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Map center={mapCenter} zoom={zoomLevel} zoomControl={false}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {this.state.markers.map((e)=>(
                    <Marker position={e.pos} icon={e.icon}>
                      
                    </Marker>
                ))}
                <Marker position={[48.39820893678183, -71.15295410156251]} icon={this.icon}>
                      <Popup>
                      <Container fluid>
                        <Row>
                          <Col xs="4">
                            <img src="/images/icon_profile.png" style={{width:'100px',height:'100px'}} />
                          </Col>
                          <Col xs="8">
                            <h2>Name</h2>
                            <h5>Spécialitée</h5>
                            <h5>Localisation</h5>
                            <p style={{'textAlign':'justify',textJustify:'interWord'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada commodo sagittis. Praesent sed mattis odio. Phasellus luctus porta hendrerit. Sed posuere dui ut justo dapibus, ut congue leo dignissim. Aliquam eget augue quam. Mauris eros ipsum, dapibus non ornare ut, iaculis at ex. Ut ac tellus eget massa cursus.</p>
                          </Col>
                        </Row>
                      </Container>
                      </Popup>
                      </Marker>
                    {/* <Marker position={ [48.39820893678183, -71.15295410156251]} icon={this.icon}></Marker> */}

              </Map>
            </TabPane>
            <TabPane tabId="2">
              <ListGroup>
                <ListGroupItem>
                  <Container fluid>
                    <Row>
                      <Col xs="2">
                        <img src="/images/icon_profile.png" />
                      </Col>
                      <Col xs="10">
                        <h2>Name</h2>
                        <h5>Spécialitée</h5>
                        <h5>Localisation</h5>
                        <p style={{'textAlign':'justify',textJustify:'interWord'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada commodo sagittis. Praesent sed mattis odio. Phasellus luctus porta hendrerit. Sed posuere dui ut justo dapibus, ut congue leo dignissim. Aliquam eget augue quam. Mauris eros ipsum, dapibus non ornare ut, iaculis at ex. Ut ac tellus eget massa cursus.</p>
                      </Col>
                    </Row>
                  </Container>
                </ListGroupItem>


              </ListGroup>
            </TabPane>
          </TabContent>
          <Modal isOpen={this.state.modal} toggle={this.toggleModalUser} className={this.props.className}>
            {this.state.userProfileModification==false?<UserProfile cb={this.modifyUser}/>:<UserProfileModification />}
          </Modal>

        </div>
    )
  }
};

export default Home;
