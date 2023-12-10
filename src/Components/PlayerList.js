import React from 'react';
import PlayerCard from './PlayerCard';
import TeamInfo from './TeamInfo'


function PlayerList(props) {
    return (
      <section className='column'>
        <TeamInfo teamName="Seahawks" coach="Pete Carroll" foundedYear={'1976'} />
        <h2>Player List</h2>
        <div className="player-container">
          {props.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </section>
    );
  }
  
export default PlayerList;
  