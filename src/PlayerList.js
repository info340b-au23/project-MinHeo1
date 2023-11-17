import React from 'react';
import PlayerCard from './PlayerCard';
import TeamInfo from './TeamInfo'

const players = [
  { id: 1, name: 'DK Metcalf', position: 'WR', team: 'Seahawks'},
  { id: 2, name: 'Geno Smith', position: 'QB', team: 'Seahawks'},
  { id: 3, name: 'Tyler Lockett', position: 'WR', team: 'Seahawks'},
];

function PlayerList() {
    return (
      <div className="player-list">
        <TeamInfo teamName="Seahawks" coach="Pete Carroll" foundedYear={'1976'} />
        <h2>Player List</h2>
        {players.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    );
  }
  
export default PlayerList;
  