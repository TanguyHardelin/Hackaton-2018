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

  constructor(props) {
      super(props);
      console.log(this.props.passedVal);
    }

  render(){
    return(
        <div>
            <Container fluid style={{backgroundColor:'#464c5e', color:'white'}}>
                <Row>
                  <br/><br/>
                    <Col xs="2">
                        <br/><img src="/images/icon_profile.png" style={{width:'50px',height:'50px'}}/>
                    </Col>
                    <Col xs="10">
                        <br/><h1 style={{fontSize:'25px', color:'White'}}>Modifications du profil</h1>
                    </Col>
                </Row>

                <Form>
                    <FormGroup>
                      <Row>
                        <Col xs="5">
                        <Label for="exampleEmail">Modifier image de profil :</Label>
                        </Col>
                        <Col xs="5">
                          <Input type="file"id="nameInput" placeholder="" />
                        </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Nom </Label>
                        <Input type="text"id="nameInput" placeholder={this.props.passedVal.userlastname} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Nom</Label>
                        <Input type="text"id="nameInput" placeholder={this.props.passedVal.userfirstname} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Age</Label>
                        <Input type="text"id="nameInput" placeholder={this.props.passedVal.userage} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Spécialité(s)</Label>
                        <Input type="text"id="nameInput" placeholder="Musicien" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Situation professionnelle</Label>
                        <Input type="text"id="nameInput" placeholder="Guitariste" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Description utilisateur</Label>
                        <Input type="textarea" id="nameInput" placeholder="Blablala" />
                    </FormGroup>
                </Form>
                <Button color='success' block>OK</Button>
                <br/>
            </Container>

        </div>
    )
  }
};

export default UserProfileModification;
