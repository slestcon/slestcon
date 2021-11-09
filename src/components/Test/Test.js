import React from "react";
import { Container } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotdog } from '@fortawesome/free-solid-svg-icons'

import HotdogPopper from '../HotdogPopper/HotdogPopper';

const Test = () => (
	<Container fluid>
		<Container fluid className="bg-secondary text-white my-5 py-5">
			<h1>
				Test
			</h1>
			<Container className="fs-5">
                <FontAwesomeIcon icon={faHotdog} />
			</Container>
		</Container>

        <Container className="fs-2">
            <HotdogPopper />
        </Container>
	</Container>
);

export default Test;
