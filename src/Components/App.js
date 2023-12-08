import React from 'react'; 
import { useState } from 'react';
import PlayerList from './PlayerList';
import Sort from './Sort';
import Homepage from './Homepage';
import Evaluation from './PlayerEval';
import DivisionList from './DivisionList';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function App(props) { //props is an array of jsonObjs
  
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
                <li><Link to="/playerEval">Player Evaluation</Link></li>
              </ul>
            </nav>
            
            <div>
            <Routes>
              <Route path="/players" element={<PlayerList players={props.data} />} />
              <Route path="/fantasy" element={<Sort data={props.data} />} />
              <Route path="/divisions" element={<DivisionList teams={props.divisions} />} />
              <Route path="/playerEval" element={<Evaluation data={props.data} />} />
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