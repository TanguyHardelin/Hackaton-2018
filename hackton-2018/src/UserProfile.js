import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import { Map, TileLayer, Marker,Popup ,DivOverlay } from 'react-leaflet';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { TabContent, TabPane,  Card, CardTitle, CardText } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Media } from 'reactstrap';
import classnames from 'classnames';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

  import MyNavBar from './MyNavBar';

class UserProfile extends React.Component{
 
  
  render(){
    
    return(
        <div>
            <MyNavBar />
            <Container>
                <Row>
                    <Col xs="2">
                        <img src="/images/icon_profile.png" />
                    </Col>
                    <Col xs="10">
                        <h1>NOM prénom</h1>
                        <h5>Quanton Ville</h5>
                    </Col>
                </Row>
                <Label for="groupe">Groupe</Label>
                <Row id="groupe">
                    <Col xs="12">
                        <h5>Age: </h5>
                        <p>XX ans</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
  }
};

export default UserProfile;
