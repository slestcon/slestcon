import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotdog, faVideo } from '@fortawesome/free-solid-svg-icons'


const Home = () => (
	<Container>
		<Container fluid className="bg-dark text-white my-5 py-5">
			<h1>
				SLESTCON
			</h1>
			<h2 className="page-title">
				The World's Premier Slest Conference
			</h2>
		</Container>
		<Container>
			<Row>
				<Col className="text-primary">
					<div className="fw-bold fs-3">
						Featuring
					</div>
					<div>
						<FontAwesomeIcon icon={faHotdog} size="3x" />
					</div>
					<div className="fw-bold fs-5">
						Hotto Dogu
					</div>
				</Col>
				<Col className="text-primary">
					<div className="fw-bold fs-3">
						Featuring
					</div>
					<div>
						<FontAwesomeIcon icon={faVideo} size="3x" />
					</div>
					<div className="fw-bold fs-5">
						Food Videos
					</div>
				</Col>
			</Row>
		</Container>
	</Container>
);

export default Home;
