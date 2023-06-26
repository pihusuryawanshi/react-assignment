import React from 'react';
import './App.css';
import TaskOne from './taskComponent.js/taskOne';
import TaskTwo from './taskComponent.js/taskTwo';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <nav className='router-style'>
        <ul>
          <li>
            <Link to="/">With useContext</Link>
          </li>
          <li>
            <Link to="/parent-child">Parent Child Relationship</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<TaskOne />} />
        <Route path="/parent-child" element={<TaskTwo />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
