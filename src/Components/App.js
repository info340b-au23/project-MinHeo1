import React from 'react'; 
import PlayerList from './PlayerList';
import Sort from './Sort';
import Homepage from './Homepage';
import Evaluation from './PlayerEval';
import DivisionList from './DivisionList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


function App(props) {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/players" element={<PlayerList players={props.data} />} />
        <Route path="/fantasy" element={<Sort data={props.data} />} />
        <Route path="/divisions" element={<DivisionList teams={props.divisions} />} />
        <Route path="/playerEval" element={<Evaluation data={props.data} />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;