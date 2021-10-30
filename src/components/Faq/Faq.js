import React from "react";
import { Container } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileWink } from '@fortawesome/free-solid-svg-icons';

const Faq = () => (
	<div>
		<h1 className="page-title">
			FAQ
		</h1>
		
		<Container className="fs-3">
			1: "There is no SlestCon"
			<FontAwesomeIcon icon={ faSmileWink } size="1x" />
		</Container>
	</div>
);

export default Faq;
