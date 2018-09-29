import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Map, TileLayer, Marker,Popup ,DivOverlay } from 'react-leaflet';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { TabContent, TabPane,  Card, CardTitle, CardText } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Media } from 'reactstrap';
import classnames from 'classnames';
import L from 'leaflet';


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

    this.state = {
      activeTab: '1',
      dropdownOpen: false,
      modal: false
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  toggleDropdown(){
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render(){
    const Icon= new L.Icon({
        iconUrl: '/images/icon_profile.png',
        popupAnchor: null,
        shadowUrl: null,

        iconSize: new L.Point(30, 30),
        className: 'leaflet-div-icon'
      }

    );
    return(
        <div>
          <MyNavBar />
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
                <Marker position={mapCenter} icon={Icon}>
                </Marker>

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

        </div>
    )
  }
};

export default Home;
