import logo from './logo.svg';
import React from 'react';
import './App.css';
import Nav from './Navbar/Navbar.js';
import Home from './Home.js';
import Restaurant from './Restaurant.js';
import Notes from './Notes.js';
import { BrowserRouter as Router,Switch,Route,Routes} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/restaurants" element={<Restaurant/>}/>
      <Route path="/notes" element={<Notes/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App;
