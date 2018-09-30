import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Map, TileLayer, Marker,Popup ,DivOverlay,Tooltip } from 'react-leaflet';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Modal, TabContent, TabPane,  Card, CardTitle, CardText } from 'reactstrap';
import { ListGroup, ListGroupItem , Badge } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Media } from 'reactstrap';
import classnames from 'classnames';
import L from 'leaflet';
import { BrowserRouter as Router, Route, Link , Redirect } from "react-router-dom";
import db from './config/Firestore'
import fire from './config/Fire';
import UserProfileModification from './UserProfileModification'
import UserProfile from './UserProfile'
import FooterPage from './Footerpage'

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
    this.getPosts = this.getPosts.bind(this);

    this.state = {
      userfirstname: '',
      userlastname: '',
      userage: '',
      userimageurl: '',
      useremail: ' ',
      activeTab: '1',
      dropdownOpen: false,
      modal: false,
      users: [],
      markers:new Array(),
      userProfileModification:false,
      userinformation:{},
      markersInfos:new Array(),
      height:'0px',
      filters:new Array()
    };

    this.activeTab='1';
    this.dropdownOpen=false


    this.toggleModalUser=this.toggleModalUser.bind(this);
    this.updateState=this.updateState.bind(this);
    this.modifyUser=this.modifyUser.bind(this)
    this.updateMarker = this.updateMarker.bind(this);
    this.setFilter=this.setFilter.bind(this)
    this.getCurrentUserInfos = this.getCurrentUserInfos.bind(this);


    this.icon= new L.Icon({
      iconUrl: '/images/poi.png',
      iconSize: new L.Point(40, 40)
    }

  );
    // setInterval(this.updateMarker,500);

    this.getPosts().then((data)=>{
      this.updateMarker(data);
      this.updateState()
    })

    //setInterval(this.updateState,5000);
  }
  componentDidMount(){
  }

  getCurrentUserInfos() {
    let self=this;
    var user = JSON.parse(JSON.stringify(fire.auth())).currentUser;
    console.log( fire.auth());
    console.log( fire.auth().currentUser);
    console.log( "USER : " + user);
    var docRef = db.collection("Users").where("email", "==", user.email);

    db.collection("Users").where("email", "==",  user.email)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            docRef = doc.data();
            self.state.userfirstname = docRef.firstName;
            self.state.userlastname = docRef.lastName;
            self.state.userage = docRef.age;
            self.state.userimageurl = docRef.imageurl || ' ';
            self.state.useremail = docRef.email;
            //console.log( "get current user : "+ self.userfirstname +" "+   self.userlastname);
        });
                        self.setState(self.state);
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

    return docRef;
  }

  getPosts() {
    let self=this;
    return new Promise((resolve,err)=>{
      var postList = [];
    db.collection("Posts").get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {

            var userTemp = {
              userfirstName: doc.data().userFirstName,
              userlastName: doc.data().userLastName,
              userAge: doc.data().userAge,
              userimage: doc.data().userimageurl,
              speciality: doc.data().speciality,
              description : doc.data().descriptif,
              latitude: doc.data().latitude,
              longitude: doc.data().longitude,
              category: doc.data().category,
              remuneration: doc.data().remuneration,
            }

            postList.push(userTemp)
        });
        self.state.markersInfos=postList;
          self.getCurrentUserInfos();
          resolve(postList);
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    console.log(postList)
    return postList;
    })

  }

  updateMarker(data) {
    //TODO get info from API
    let self=this;

    let tab=self.state.markersInfos
    for(let i=0;i<tab.length;i++){
      let pos=[tab[i].latitude, tab[i].longitude];

      let image_url='/images/poi.png'
      let indice='fonce';
      if(parseInt(tab[i].remuneration)>0)
        indice='orange'
      switch(tab[i].category) {
          case "Peintre":
                image_url = "/images/paint_"+indice+".png"
                break;
          case "Musicien":
                image_url = "/images/note_"+indice+".png"
                break;
          case "Acteur":
                image_url = "/images/actor_"+indice+".png"
                break;
          case "Photographe":
                image_url = "/images/note_"+indice+".png"
                break;
          case "Chanteur":
                image_url = "/images/sing_"+indice+".png"
                break;
          case "Sculpteur":
                image_url = "/images/sculptor_"+indice+".png"
                break;
          case "Realisateur":
                image_url = "/images/clapboard_"+indice+".png"
                break;
          default:
                break;
        }

        let ic=new L.Icon({
          iconUrl: image_url,
          iconSize: new L.Point(40, 40)

        }
      );

      //this.icon.push(ic);
      self.state.markers.push({icon:ic,pos:pos,userfirstName:tab[i].userfirstName,
      userlastName:tab[i].userlastName,
      image_url:image_url,
      id:i,
      userimage:tab[i].userimage,
      speciality:tab[i].speciality,
      category:tab[i].category,
      description:tab[i].description,
      remuneration:tab[i].remuneration
    })
  }


  }

  updateState(){
    console.log(this.state)
    this.setState(this.state);
    // console.log(this.state.userfirstName);
  }

  toggle(tab) {
    console.log(tab);
    if (this.state.activeTab !== tab) {

      this.state.activeTab= tab
    }
    this.updateState()
  }
  toggleModalUser(){
    this.state.modal=!this.state.modal;
    this.updateState()
  }
  toggleDropdown(){
    this.state.dropdownOpen=!this.state.dropdownOpen;
    this.updateState()
  }
  modifyUser(){
    this.state.userProfileModification=!this.state.userProfileModification;
    this.updateState()
  }
  checkForValue(json, tab) {
    
    for(let i=0;i<tab.length;i++){
      let value=tab[i]
        for (let key in json) {
            if (typeof (json[key]) === "object") {
                return this.checkForValue(json[key], value);
            } else if (json[key] === value) {
              console.log(tab)
                console.log(json)
                
                return true;
                
            }
        }
    }
    return false;
}
  setFilter(filters){
    
    this.state.filters=filters;
    for(let i=0;i<this.state.markers.length;i++){
      let b=true
      if(this.state.filters.length>0){
        for(let j=0;j<this.state.filters.length;j++){
          if(this.state.markers[i].category==this.state.filters[j]){
            console.log(this.state.filters[j])
            b=false
          }
        }
        if(!b){
          this.state.markers=this.state.markers.splice(i,1)
          console.log(this.state.markers)
        }
        
      }

    }
    console.log(this.state.markers)
    //console.log(this.state.filters)
    this.setState(this.state)
  }

  render(){
    return(
        <div style={{backgroundColor:"#2c3142"}}>
          <MyNavBar  getUserInformation={this.toggleModalUser} updateMarker={this.getPosts} setFilter={this.setFilter}/>
          <Nav id='titiBar' justified fill pills >
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
              <Map center={mapCenter} zoom={zoomLevel} zoomControl={false} style={{height:"400px"}}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />



                {this.state.markers.map((element)=>(
                      
                    <Marker key position={element.pos} icon={element.icon}>
                        <Popup key position={element.pos}>
                        {console.log(element.pos)}
                          <Container fluid>
                            <Row>
                              <Col xs="2">
                                <img src="/images/icon_profile.png" style={{width:'50px',height:'50px'}}/>
                              </Col>
                              <Col xs="10">
                                {console.log(element)}
                                <h4>{element.userfirstName+' '+element.userlastName}</h4>

                              </Col>
                              </Row>
                              <Row><h7><b>Profil recherché:</b> {element.category}</h7></Row>
                              <Row>
                            {element.remuneration!='0'?
                            <h7><b>Rémunération: </b><Badge color="warning">{element.remuneration} $</Badge></h7>:
                            <h7><b>Rémunération: </b><Badge>Bénévolat</Badge></h7>
                            }
                              </Row>
                              <Row>
                          <div><h7><b>Description de l'annonce:</b> </h7><p>{element.description}</p></div>
                          </Row>
                          </Container>

                        </Popup>
                    </Marker>

                ))}

              </Map>
            </TabPane>
            <TabPane tabId="2" >
              <ListGroup>
              {this.state.markers.map((element)=>(
                <ListGroupItem key style={{backgroundColor:"#464c5e", color:'white'}}>
                  <Container fluid>
                    <Row>
                      <Col xs="2">
                        <img src="/images/icon_profile.png" />
                      </Col>
                      <Col xs="10" >
                        {console.log(element)}
                        <h2>{element.userfirstName+' '+element.userlastName}</h2>
                        <h5>Profil recherché : {element.category}</h5>
                        <p style={{'textAlign':'justify',textJustify:'interWord'}}>{element.description}</p>
                      </Col>
                    </Row>
                  </Container>
                </ListGroupItem>
              ))}

              </ListGroup>
            </TabPane>
          </TabContent>
          <Modal isOpen={this.state.modal} toggle={this.toggleModalUser} className={this.props.className}>
            {this.state.userProfileModification==false?<UserProfile cb={this.modifyUser} passedVal={this.state}/>:<UserProfileModification  passedVal={this.state}/>}
            {/* {this.state.userProfileModification==false?<UserProfile cb={this.modifyUser} passedVal={this.state.userfirstname}/>:<UserProfileModification />} */}
          </Modal>
        <FooterPage/>
        </div>
    )
  }
};


export default Home;
