import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { useState } from "react";

// import Dropdown from "./dropdown";
export default function Evaluation(props) {
  //pass in data of all the players as a prop?
  const players = props.data;
  const [playerOne, setplayerOne] = useState('');
  const [playerTwo, setPlayerTwo] = useState('');
  const [showErrorGive, setShowErrorGive] = useState(false);
  const [showErrorReceive, setShowErrorReceive] = useState(false);
  const [eligibleTrade, setEligibleTrade] = useState(false);
  const [makeTrade, setMakeTrade] = useState(false);

  const handlePlayerOneChange = (e) => {
    console.log(e.target.value)
    setplayerOne(e.target.value);
  }

  const handlePlayerTwoChange = (e) => {
    console.log(e.target.value)
    setPlayerTwo(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowErrorGive(false);
    setShowErrorReceive(false);
    setEligibleTrade(false);
    setMakeTrade(false);
  
    const playerToGiveObject = findPlayerByName(playerOne);
    const playerToReceiveObject = findPlayerByName(playerTwo);
  
    if (!playerToGiveObject) {
      setShowErrorGive(true);
      return;
    }
    if (!playerToReceiveObject) {
      setShowErrorReceive(true);
      return;
    }
  
    setEligibleTrade(true);
    const playerToGiveFantasyPoints = parseFloat(playerToGiveObject.Fantasy[0].FantPt);
    const playerToReceiveFantasyPoints = parseFloat(playerToReceiveObject.Fantasy[0].FantPt);
  
    if (playerToReceiveFantasyPoints > playerToGiveFantasyPoints) {
      setMakeTrade(true);
    }
  
    console.log("Player to give:", playerToGiveObject.Player, "Fantasy Points:", playerToGiveFantasyPoints);
    console.log("Player to receive:", playerToReceiveObject.Player, "Fantasy Points:", playerToReceiveFantasyPoints);
  };
  
  const findPlayerByName = (playerName) => players.find(
    (data) => data.Player.toLowerCase() === playerName.toLowerCase()
  );
  
	return (
    <div>

      {showErrorGive && (
        <Alert variant="warning">Please enter a valid player to give!</Alert>
      )}
      {showErrorReceive && (
        <Alert variant="warning">Please enter a valid player to receive!</Alert>
      )}
      {(() => {
        if (eligibleTrade && makeTrade) {
          return <Alert show={eligibleTrade} variant="success">Make this Trade!</Alert>;
        } else {
          return <Alert show={eligibleTrade} variant="danger">Dont make this trade!</Alert>;
        }
      })()}

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
                    const searchTerm = playerOne.toLowerCase(); // text typed into form
                    const playerName = data.Player.toLowerCase(); // player name from json
                    return searchTerm && playerName.startsWith(searchTerm);
                  })
                  .map((data) => 
                    <div className="player-dropdown-row" key={data.Player}> 
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
                  <div className="player-dropdown-row" key={data.Player}> 
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
    </div>
  );
}
