import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css';
import Quiz from './Quiz';
import Start from './Start';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path='/' component={Start} />
            <Route path='/quiz/:questionIndex' component={Quiz} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
