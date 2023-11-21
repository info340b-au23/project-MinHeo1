import React from 'react';
import PlayerCard from './PlayerCard';
import TeamInfo from './TeamInfo'

const players = [
  { id: 1, name: 'DK Metcalf', position: 'WR', team: 'Seahawks', image:"./img/dk.jpeg"},
  { id: 2, name: 'Geno Smith', position: 'QB', team: 'Seahawks', image:"./img/geno.jpeg"},
  { id: 3, name: 'Tyler Lockett', position: 'WR', team: 'Seahawks', image:"./img/tyler.jpeg"},
];

function PlayerList(Props) {
    return (
      <section className='column'>
        <TeamInfo teamName="Seahawks" coach="Pete Carroll" foundedYear={'1976'} />
        <h2>Player List</h2>
        <div className="player-container">
          {players.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </section>
    );
  }
  
export default PlayerList;
  