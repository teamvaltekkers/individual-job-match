import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';
import Quiz from './Quiz';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 >Welcome to Individual Talent Match</h1>
        </header>
        <p>
          TODO
        </p>
        <Router>
          <Route path='/' component={Quiz} />
        </Router>
      </div>
    );
  }
}

export default App;
