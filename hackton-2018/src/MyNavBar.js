import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import { Map, TileLayer, Marker,Popup ,DivOverlay } from 'react-leaflet';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { TabContent, TabPane,  Card, CardTitle, CardText } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Badge } from 'reactstrap';
import { Media } from 'reactstrap';
import classnames from 'classnames';
import { Redirect } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';


class MyNavBar extends React.Component{
    constructor(props) {
        super(props);

        this.toggle=this.toggle.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this)
        this.state = {
            modal: false,
            dropdownOpen: false
        };
    }

    seeProfile(){
        console.log("TOTO");
        //<Redirect to='/profile' />
    }
    toggle() {
        console.log("TITI")
        this.setState({
            modal: !this.state.modal
        });
    }

    toggleDropdown(){
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    render(){
        return (
            <div>
                <Navbar color="light" light expand="md">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown} inNavbar>
                    <DropdownToggle nav>
                        <img src="/images/icon_profile.png" style={{width:'50px',height:'50px'}}/>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Mon profil</DropdownItem>
                        <DropdownItem onClick={()=>{this.seeProfile()}}>
                            <div style={{display:'flex',flexDirection:"row"}}>
                                <img src="/images/icon_profile.png" style={{width:'25px',height:'25px'}}/>
                                <p>NOM Prénom</p>
                            </div>
                        </DropdownItem>
                        <DropdownItem>
                            <div style={{display:'flex',flexDirection:"row",height:'15px'}}>
                                <Badge color="danger" pill>0</Badge>
                                <p> Messages</p>
                            </div>
                        </DropdownItem>
                        <DropdownItem onClick={this.toggle}>Je recherche une personne</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem header>Paramètres</DropdownItem>
                        <DropdownItem>Paramètres</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Deconnexion</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                    <Input placeholder="Ajouter un filtre" />
                
                </Navbar>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <Container fluid>
                        <Form>
                            <legend>Publier une annonce</legend>
                            <FormGroup check><Label check><Input type="radio" name="radio1" />{' '}Musicien</Label></FormGroup>
                            <FormGroup check><Label check><Input type="radio" name="radio1" />{' '}Acteur</Label></FormGroup>
                            <FormGroup check><Label check><Input type="radio" name="radio1" />{' '}Peintre</Label></FormGroup>

                            <FormGroup>
                                <Label for="exampleEmail">Type</Label>
                                <Input type="text" id="exampleEmail" placeholder="Type" />
                            </FormGroup>

                            <p>Selectionner une localisation</p>
                            <Map center={[48.42333164, -71.055499778]} zoom={10} zoomControl={false} style={{with:'200px',height:'200px'}}>
                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                
                                
                            </Map>

                            <Button>OK</Button>
                        
                        </Form>
                    </Container>
                </Modal>
            </div>
        )
    }
}

export default MyNavBar