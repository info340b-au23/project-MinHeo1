import Button from "react-bootstrap/Button";
import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// import Dropdown from "./dropdown";
export default function Evaluation(props) {
  //pass in data of all the players as a prop?
	return (
    <Form>
      <Row className="align-items-center">
        <Col className="my-5" >
					<Form.Label>Player to Give</Form.Label>
          <Form.Control placeholder="Enter Player Name" />
        </Col>
        <Col className="my-5">
					<Form.Label className="text-center">Player to Recieve</Form.Label>
          <Form.Control placeholder="Enter Player Name" />
        </Col>
      </Row>
			<Row>
				<Col xs="auto">
					<Button type="submit" className="btn btn-primary mb-2 ">
						Submit
					</Button>
				</Col>
			</Row>
    </Form>
  );
}
