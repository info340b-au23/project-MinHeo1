import React from 'react'; 
import PlayerList from './PlayerList';

function App() {
    const teamData = {
      teamName: 'Seattle Seahawks',
      coach: 'Pete Carroll',
      foundedYear: '1976',
    };
    return (
      <div className="App">
        <h1>Fantasy Football</h1>
        <TeamInfo {...teamData} />
        <PlayerList />
      </div>
    );
  }
export default App;
  