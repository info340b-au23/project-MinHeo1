import React from 'react'; 
import PlayerCard from './PlayerCard';
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
        <Route index element={<Homepage />} />
        <Route path="/players" element={<PlayerCard players={props.data} />} />
        <Route path="/fantasy" element={<Sort data={props.data} />} />
        <Route path="/divisions" element={<DivisionList teams={props.divisions} />} />
        <Route path="/playerEval" element={<Evaluation data={props.data} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;