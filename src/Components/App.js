import React from 'react'; 
import { useState } from 'react';
import PlayerList from './PlayerList';
import Sort from './Sort';
import Homepage from './Homepage';
import DivisionList from './DivisionList';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TeamInfo from './TeamInfo';


function App(props) { //props is an array of jsonObjs
  const [activeComponent, setActiveComponent] = useState(<Homepage />);

  const handleClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <Router>
      <header aria-label='navigation'>
        <section>
          <div>
            <nav className="main_nav">
              <ul>
                <li><Link to="/players">Player List</Link></li>
                <li><Link to="/fantasy">Fantasy</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/divisions">Divisions</Link></li>
              </ul>
            </nav>
            
            <div>
            <Routes>
              <Route path="/players" element={<PlayerList players={props.data} />} />
              <Route path="/fantasy" element={<Sort data={props.data} />} />
              <Route path="/divisions" element={<DivisionList teams={props.divisions} />} />
              <Route path="/" element={<Homepage />} />
            </Routes>
            </div>
          </div>
        </section>
      </header>
    </Router>
  );
}
  
export default App;