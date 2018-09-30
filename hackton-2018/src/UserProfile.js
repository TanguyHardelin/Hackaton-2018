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

  constructor(props) {
      super(props);
      console.log(this.props.passedVal);
    }

  render(){
    return(
        <div style={{backgroundColor:'#464c5e'}}>
            <Container fluid >
              <br/>
              <Row>
              <Col xs="2">
                  <img src="/images/icon_profile.png" style={{width:'50px',height:'50px'}}/>
              </Col>
              <Col xs="8">
                  <Button outline block color="primary" type="text">Profil utilisateur </Button>
              </Col>
              </Row>
              <br/>
              <Col>
                  <FormGroup>
                      <Button outline block color="primary" type="text" id="userfirstname">{this.props.passedVal.userfirstname} </Button>
                  </FormGroup>

                  <FormGroup>
                      <Button outline block color="primary" type="text" id="userlastname"> {this.props.passedVal.userlastname} </Button>
                  </FormGroup>

                  <FormGroup>
                        <Button outline block color="primary" type="number" id="userage" >{this.props.passedVal.userage} </Button>
                  </FormGroup>

                  <FormGroup>
                        <Button outline block color="primary" type="email" id="nameInput">{this.props.passedVal.useremail} </Button>
                  </FormGroup>

                </Col>

                 <Button color='success' block onClick={this.props.cb}>Modifier</Button>
            </Container>
          <br/>

        </div>
    )
  }
};

export default UserProfile;
