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
import L from 'leaflet';
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

        this.handleMapClick=this.handleMapClick.bind(this);

        this.toggle=this.toggle.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this)
        this.state = {
            modal: false,
            dropdownOpen: false,
            marker:new Array()
        };

        this.icon= new L.Icon({
            iconUrl: '/images/poi.png',
            popupAnchor: null,
            shadowUrl: null,
          
            iconSize: new L.Point(30, 30),
            className: 'leaflet-div-icon'
          }
    
        );
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
    handleMapClick(e){
        let latlng=e.latlng;
        if(this.state.marker.length<1)
            this.state.marker.push([latlng.lat,latlng.lng]);
        else{
            this.state.marker[0]=[latlng.lat,latlng.lng];
        }
        this.setState(this.state);
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
                        <DropdownItem color='danger'>Deconnexion</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                    <Input placeholder="Ajouter un filtre" />
                
                </Navbar>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <Container fluid>
                        <h3>  </h3>
                        <Form>
                            <FormGroup>
                                <Label for="exampleSelect">Cathegorie</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>Musicien</option>
                                    <option>Peintre</option>
                                    <option>Théatre</option>
                                    <option>Photographe</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="specialiteeInput">Spécialitée</Label>
                                <Input type="text" id="specialiteeInput" placeholder="specialitee" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="styleInput">Style</Label>
                                <Input type="text" id="styleInput" placeholder="style" />
                            </FormGroup>

                            <Label for="mapForm">Localisation</Label>
                            <Map id='mapForm' center={[48.42333164, -71.055499778]} zoom={10} zoomControl={false} style={{with:'200px',height:'200px'}} onclick={this.handleMapClick}>
                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                
                                {this.state.marker.map((e)=>(
                                    <Marker position={e} icon={this.icon}></Marker>
                                ))}
                                
                            </Map>                         
                        </Form>
                        
                    </Container>
                    <p>    </p>
                    <Button color='success' block>Publier une annonce</Button>
                </Modal>
            </div>
        )
    }
}

export default MyNavBar