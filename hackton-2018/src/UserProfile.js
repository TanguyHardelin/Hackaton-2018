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
            <Container fluid>
                <Row>
                    <Col xs="2">
                        <img src="/images/icon_profile.png" style={{width:'50px',height:'50px'}}/>
                    </Col>
                    <Col xs="10">
                        <h1>NOM prénom</h1>
                    </Col>
                </Row>

                <h5>20 ans</h5>
                <h5>Musicien: guitariste</h5>
                <p>Lorem Ipsum</p>
                
                <Button color='success' block onClick={this.props.cb}>Modifier</Button>
            </Container>
            
        </div>
    )
  }
};

export default UserProfile;
