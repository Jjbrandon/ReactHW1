import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Calc from './components/Calc'
import Contact from './views/Contact/Contact';
import Home from './views/Home/Home';
import Map from './views/Map/Map';
import Navbar from './components/Navbar';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Calc name='John' />
        <main>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/map" element = {<Map />} />
          <Route path="/contact" element = {<Contact />} />
      </Routes>
    </main>

      </Router>
    )
  }
}
