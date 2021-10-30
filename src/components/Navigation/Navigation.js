import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => (

	<Navbar bg="dark" variant="dark" sticky="top" expand="lg">
		<Container>
			<Navbar.Brand href="/slestcon/#/Slestcon2022">SlestCon</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link href="/slestcon/#/Slestcon2021">SlestCon 2021</Nav.Link>
					<Nav.Link href="/slestcon/#/Slestcon2022">SlestCon 2022</Nav.Link>
				</Nav>
				<Nav className="d-flex">
					<Nav.Link href="/slestcon/#/Faq">FAQ</Nav.Link>
					<Nav.Link href="/slestcon/#/Contact">Contact</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
);

export default Navigation;
