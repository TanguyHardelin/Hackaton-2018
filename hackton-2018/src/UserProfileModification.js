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

class UserProfileModification extends React.Component{
 
  
  render(){
    
    return(
        <div>
            <Container fluid>
                <Row>
                    <Col xs="2">
                        <img src="/images/icon_profile.png" style={{width:'50px',height:'50px'}}/>
                    </Col>
                    <Col xs="10">
                        <h1>NOM prénom</h1>
                    </Col>
                </Row>

                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Nom Prénom</Label>
                        <Input type="file"id="nameInput" placeholder="Nom prénom" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Nom Prénom</Label>
                        <Input type="text"id="nameInput" placeholder="Nom prénom" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Age</Label>
                        <Input type="text"id="nameInput" placeholder="20 ans" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Spécialitée</Label>
                        <Input type="text"id="nameInput" placeholder="Musiciens" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Proféssion</Label>
                        <Input type="text"id="nameInput" placeholder="Guitariste" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Description</Label>
                        <Input type="textarea" id="nameInput" placeholder="Blablala" />
                    </FormGroup>
                </Form>
                <Button color='success' block>OK</Button>
            </Container>
            
        </div>
    )
  }
};

export default UserProfileModification;
