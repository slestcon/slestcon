import React from "react";
import { Container, Row, Col, Figure, Image } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotdog, faHandSparkles, faComment, faNewspaper } from '@fortawesome/free-solid-svg-icons';

import slestPic from './pictures/slest_face_2.jfif';
import foodPic from './pictures/food_screencap_1.PNG';
import gameplayPic from './pictures/gameplay_screencap_1.PNG';
import hottodoguPic from './pictures/hottodogu_screencap_1.PNG';

const Slestcon2022 = () => (
	<Container fluid>
		<Container fluid className="bg-secondary text-white my-5 py-5">
			<Row>
				<Col className="my-5 py-5">
					<h1>
						SlestCon 2022
					</h1>
					<h2 className="page-title">
						The World's Premier Slest Conference
					</h2>
				</Col>
				<Col>
					<Image 
						height={400}
						width={400}
						roundedCircle
						src={ slestPic } />
				</Col>
			</Row>
		</Container>
		
		<Container>
			<Row>
				<Col className="text-secondary">
					<Figure>
						<div className="fw-bold fs-3">
							Food Reviewer Reviews
						</div>
						<Figure.Image
							width={400}
							height={200}
							alt="food"
							src={foodPic}/>
						<Figure.Caption>
							- Slestcon Highlights Team -
						</Figure.Caption>
					</Figure>
				</Col>
				<Col className="text-secondary">
					<Figure>
						<div className="fw-bold fs-3">
							Bold And Daring Gameplay
						</div>
						<Figure.Image
							width={400}
							height={200}
							alt="food"
							src={gameplayPic}/>
						<Figure.Caption>
							- Only at Slestcon -
						</Figure.Caption>
					</Figure>
				</Col>
				<Col className="text-secondary">
					<Figure>
						<div className="fw-bold fs-3">
							Hotto Dogu
						</div>
						<Figure.Image
							width={400}
							height={200}
							alt="food"
							src={hottodoguPic}/>
						<Figure.Caption>
							- Hotto Dogu -
						</Figure.Caption>
					</Figure>
				</Col>
			</Row>
		</Container>

		<Container fluid className="bg-secondary text-white my-5 py-5">
			<Row>
				<Col className="fw-bold fs-3 my-5 py-5">
					Join us at SlestCon 2022
					<br/>
					<FontAwesomeIcon icon={ faHandSparkles } size="3x" />
				</Col>
				<Col>
					<Row>
						<Col className="fw-bold fs-3 my-2 py-2">
							Apply to be a Speaker or Performer
							<br/>
							<FontAwesomeIcon icon={ faComment } size="3x" />
						</Col>
					</Row>
					<Row>
						<Col className="fw-bold fs-3 my-2 py-2">
							Get More SlestCon News
							<br/>
							<FontAwesomeIcon icon={ faNewspaper } size="3x" />
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>

		<Container>
			<FontAwesomeIcon icon={ faHotdog }></FontAwesomeIcon>
		</Container>
	</Container>
	
	
);

export default Slestcon2022;