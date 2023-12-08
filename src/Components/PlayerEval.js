import Button from "react-bootstrap/Button";
import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from "react";

// import Dropdown from "./dropdown";
export default function Evaluation(props) {
  //pass in data of all the players as a prop?
  const players = props.data;
  const [playerOne, setplayerOne] = useState('');
  const [playerTwo, setPlayerTwo] = useState('');

  const handlePlayerOneChange = (e) => {
    setplayerOne(e.target.value);
  };

  const handlePlayerTwoChange = (e) => {
    setPlayerTwo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted value:' + playerOne + ' and ' + playerTwo);
  };

	return (
    <Form onSubmit={handleSubmit}>
      <Row className="align-items-center">
        <Col className="my-5" >
					<Form.Label>Player to Give</Form.Label>
          <Form.Control 
            type="text"
            value={playerOne}
            onChange={handlePlayerOneChange}
            placeholder="Enter Player Name" />
            <div className="player-dropdown">
              {
                players.filter(data => {
                  const searchTerm = playerOne.toLowerCase();
                  const playerName = data.Player.toLowerCase();
                  return searchTerm && playerName.startsWith(searchTerm);
                })
                .map((data) => 
                  <div className="player-dropdown-row"> 
                    {data.Player}
                  </div>
                )
              }
            </div>
        </Col>
        <Col className="my-5">
					<Form.Label className="text-center">Player to Recieve</Form.Label>
          <Form.Control 
            type="text"
            value={playerTwo}
            onChange={handlePlayerTwoChange}
            placeholder="Enter Player Name" />
            <div className="player-dropdown">
              {
                players.filter(data => {
                  const searchTerm = playerTwo.toLowerCase();
                  const playerName = data.Player.toLowerCase();
                  return searchTerm && playerName.startsWith(searchTerm);
               })
              .map((data) => 
                <div className="player-dropdown-row"> 
                  {data.Player}
                </div>
                )
              }
            </div>
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
