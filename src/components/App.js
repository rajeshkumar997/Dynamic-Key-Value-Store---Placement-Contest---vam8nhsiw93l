import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import KeyValueStore from './KeyValueStore';
import '../styles/App.css';

function App() {
  return (
    <Router>
      <div id="main">
        <nav>
    <button onClick={() => {
    window.history.replaceState(null,null,'/')}>Reset</button>
          Reset
        </nav>
        <KeyValueStore />
      </div>
    </Router>
  );
}


export default App;
