import React from 'react';

function PlayerCard({player}) {
  return (
    <div className="player">
      <img src={player.image} alt={`${player.name}`} />
      <h3>{player.name}</h3>
      <p>Position: {player.position}</p>
      <p>Team: {player.team}</p>
    </div>
  );
}

export default PlayerCard;
