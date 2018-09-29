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

        this.toggleDropdown = this.toggleDropdown.bind(this)
        this.state = {
            dropdownOpen: false
        };
    }

    seeProfile(){
        <Redirect to='/profile' />
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
                            <div style={{display:'flex',flexDirection:"row",justifyContent:'flex'}}>
                                <img src="/images/icon_profile.png" style={{width:'15px',height:'15px'}}/>
                                <p>NOM Prénom</p>
                            </div>
                        </DropdownItem>
                        <DropdownItem>Messages</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem header>Paramètres</DropdownItem>
                        <DropdownItem>Paramètres</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Deconnexion</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                    <Input placeholder="Rechercher" />
                
                </Navbar>
            </div>
        )
    }
}

export default MyNavBar