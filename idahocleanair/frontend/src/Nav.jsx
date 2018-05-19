import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';

import './Nav.css'

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div >
            <Navbar color="success" fixed='top' light expand="md">
            <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar color>
            <NavItem >
                <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/allcontacts">All Contacts</NavLink>
            </NavItem>
        </Nav>
        </Collapse>
        </Navbar>
        </div>
    );
    }
}