import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { useState } from "react";

// import Dropdown from "./dropdown";
export default function Evaluation(props) {
  //pass in data of all the players as a prop?
  const players = props.data;
  const [playerOne, setplayerOne] = useState('');
  const [playerTwo, setPlayerTwo] = useState('');
  const [playerOneStats, setPlayerOneStats] = useState(null);
  const [playerTwoStats, setPlayerTwoStats] = useState(null);
  const [showErrorGive, setShowErrorGive] = useState(false);
  const [showErrorReceive, setShowErrorReceive] = useState(false);
  const [eligibleTrade, setEligibleTrade] = useState(false);
  const [makeTrade, setMakeTrade] = useState(false);

  const filterPlayers = (searchTerm) => {
    return players.filter(player =>
      player.Player.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };


  const handlePlayerOneChange = (e) => {
    setplayerOne(e.target.value);
  }
  const handlePlayerTwoChange = (e) => {
    setPlayerTwo(e.target.value);
  }

  const findPlayerByName = (playerName) => {
    return players.find(
      (data) => data.Player.toLowerCase() === playerName.toLowerCase()
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowErrorGive(false);
    setShowErrorReceive(false);
    setEligibleTrade(false);
    setMakeTrade(false);

    const playerOneData = findPlayerByName(playerOne);
    const playerTwoData = findPlayerByName(playerTwo);

    if (!playerOneData) {
      setShowErrorGive(true);
      return;
    }
    if (!playerTwoData) {
      setShowErrorReceive(true);
      return;
    }

    setEligibleTrade(true);
    const playerToGiveFantasyPoints = parseFloat(playerOneData.Fantasy[0].FantPt);
    const playerToReceiveFantasyPoints = parseFloat(playerTwoData.Fantasy[0].FantPt);

    if (playerToReceiveFantasyPoints > playerToGiveFantasyPoints) {
      setMakeTrade(true);
    }

    setPlayerOneStats(playerOneData);
    setPlayerTwoStats(playerTwoData);
  };

  const renderStats = (player) => {
    if (!player) return null;

    return (
      <div className="player-stats">
        <h3>{player.Player}'s Stats</h3>
        <table className="stats-table">
          <tbody>
            {Object.entries(player).map(([key, value]) => (
              <tr key={key}>
                <th>{key}</th>
                <td>{JSON.stringify(value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      {showErrorGive && <Alert variant="warning">Please enter a valid player to give!</Alert>}
      {showErrorReceive && <Alert variant="warning">Please enter a valid player to receive!</Alert>}
      {eligibleTrade && (makeTrade
        ? <Alert variant="success">Make this Trade!</Alert>
        : <Alert variant="danger">Don't make this trade!</Alert>)}

      <Form onSubmit={handleSubmit}>
        <Row className="align-items-center">
          <Col className="my-5">
            <Form.Label>Player to Give</Form.Label>
            <Form.Control
              type="text"
              value={playerOne}
              onChange={handlePlayerOneChange}
              placeholder="Enter Player Name" />
            {playerOne && (
              <div className="player-dropdown">
                {filterPlayers(playerOne).map(player => (
                  <div
                    className="player-dropdown-row"
                    key={player.Player}
                    onClick={() => setplayerOne(player.Player)}
                  >
                    {player.Player}
                  </div>
                ))}
              </div>
            )}
          </Col>
          <Col className="my-5">
            <Form.Label>Player to Receive</Form.Label>
            <Form.Control
              type="text"
              value={playerTwo}
              onChange={handlePlayerTwoChange}
              placeholder="Enter Player Name" />
            {playerTwo && (
              <div className="player-dropdown">
                {filterPlayers(playerTwo).map(player => (
                  <div
                    className="player-dropdown-row"
                    key={player.Player}
                    onClick={() => setPlayerTwo(player.Player)}
                  >
                    {player.Player}
                  </div>
                ))}
              </div>
            )}
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

      <div className="player-stats-container">
        {renderStats(playerOneStats)}
        {renderStats(playerTwoStats)}
      </div>
    </div>
  );
}