import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => (

	<Navbar bg="dark" variant="dark" sticky="top" expand="lg">
		<Container>
			<Navbar.Brand href="/">SlestCon</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link href="/#/Slestcon2021">SlestCon 2021</Nav.Link>
					<Nav.Link href="/#/Slestcon2022">SlestCon 2022</Nav.Link>
				</Nav>
				<Nav className="d-flex">
					<Nav.Link href="/#/Contact">Contact</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
);

export default Navigation;
