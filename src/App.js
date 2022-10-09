import React from 'react';
import './App.css';
import Stadium from './Stadium';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
    return (
      <Router>
        <div>
        <Link to='/'>Home</Link><br />
          <Link to='/about'>About</Link><br />
          <Link to='/stadium'>Stadium</Link><br />
          <Link to='/contact'>Contact</Link>
         
        </div>
        <Routes>
          <Route path="/about" element={<About/> }/>
          <Route path="/contact" element={<Contact/> }/>
          <Route path="/stadium" element={<Stadium/> }/>
          <Route exact path="/" element={<Home/> }/>
        </Routes>
      </Router>
  );
}

export default App;
