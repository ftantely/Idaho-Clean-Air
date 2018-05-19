import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Badge
} from 'reactstrap';



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
            <div className="hope">
            <Navbar  color="success" fixed='bottom' light expand="md">
                <NavbarBrand color="light"    href="/"> <Badge>Idaho Clean Air</Badge></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
            <NavItem>
            <NavLink href="/news">News</NavLink>
            </NavItem>
        </Nav>
        </Collapse>
        </Navbar>
        </div>
    );
    }
}