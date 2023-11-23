import React from 'react'; 
import { useState } from 'react';
import PlayerList from './PlayerList';
import Sort from './Sort';
import Homepage from './Homepage';
import DivisionList from './DivisionList';
import TeamInfo from './TeamInfo';


function App(props) { //props is an array of jsonObjs
  const [activeComponent, setActiveComponent] = useState(<Homepage />);

  const handleClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <header aria-label='navigation'>
      <section>
        <div>
          <nav className="main_nav">
            <ul>
              <li><button onClick={() => handleClick(<PlayerList players={props.data} />)}>Player List</button></li>
              <li><button onClick={() => handleClick(<Sort data={props.data} />)}>Fantasy</button></li>
              <li><button onClick={() => handleClick(<Homepage />)}>Home</button></li>
              <li><button onClick={() => handleClick(<DivisionList teams={props.divisions}/>)}>Divisions</button></li>
            </ul>
          </nav>
          
          <div>
            {activeComponent}
          </div>
        </div>
      </section>
    </header>
  );
}
  
export default App;
  

    // const teamData = {
    //   teamName: 'Seattle Seahawks',
    //   coach: 'Pete Carroll',
    //   foundedYear: '1976',
    // };
       // <div className="App">
      //   <h1>Fantasy Football</h1>
      //   <TeamInfo {...teamData} />
      //   <PlayerList />
      //   <Sort data={data} />
      // </div>