import React from 'react'; 
import { useState } from 'react';
import PlayerList from './PlayerList';
import TeamInfo from './TeamInfo';
import Sort from './Sort';


function App(props) { //props is an array of jsonObjs
  const [activeComponent, setActiveComponent] = useState(<PlayerList />);

  const handleClick = (component) => {
    setActiveComponent(component);
  };
    return (
      <header aria-label='navigation'>
        <section className="navbar">
          <div>
            <nav className="main_nav">
            <ul>
              <li><button onClick={() => handleClick(<PlayerList players={props.data} />)}>Player List</button></li>
              <li><button onClick={() => handleClick(<TeamInfo />)}>Team Info</button></li>
              <li><button onClick={() => handleClick(<Sort data={props.data} />)}>Fantasy</button></li>
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