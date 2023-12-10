import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
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
        </div>
      </section>
    </header>
  );
};

export default Header;