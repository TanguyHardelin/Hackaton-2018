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
import { Redirect } from 'react-router-dom';
import fire from './config/Fire';
import L from 'leaflet';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
  import ResearchCollaborators from './ResearchCollaborators'

class MyNavBar extends React.Component{

    constructor(props) {
        super(props);
        this.passUpdateMarker=this.passUpdateMarker.bind(this)
        this.toggle=this.toggle.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);

        this.state = {
            modal: false,
            dropdownOpen: false,
            marker:new Array()
        };
    }
    passUpdateMarker(){
      this.props.updateMarker();
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

    logout () {
      fire.auth().signOut();
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
                                <p>Non Prénom</p>
                            </div>
                        </DropdownItem>
                        <DropdownItem>
                            <div style={{display:'flex',flexDirection:"row",height:'15px'}}>
                                <Badge color="danger" pill>0</Badge>
                                <p> Messages</p>
                            </div>
                        </DropdownItem>
                        <DropdownItem onClick={this.toggle}>Publier une annonce</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Paramètres</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem color='danger' onClick={this.logout}>Déconnexion</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                    <Input placeholder="Ajouter un filtre" />
                </Navbar>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ResearchCollaborators updateMarker={this.passUpdateMarker}/>
                </Modal>
            </div>
        )
    }
}

export default MyNavBar
