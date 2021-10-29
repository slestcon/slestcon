import React from "react";
import { Container } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotdog } from '@fortawesome/free-solid-svg-icons'

const Slestcon2021 = () => (
	<Container>
		<h1>
			SlestCon 2021
		</h1>
		
		<Container>
			Unfortunately, due to COVID-19, we had to cancel SlestCon 2021.  
			<br/>
			Please have a virtual hotdog for your inconveniences.
			<br/>
			<FontAwesomeIcon icon={faHotdog} />
		</Container>
	</Container>
);

export default Slestcon2021;
