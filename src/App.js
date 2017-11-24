import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import './App.css';
import Quiz from './Quiz';
import Start from './Start';
import Summary from './Summary';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={Start} />
              <Route path='/quiz/:questionIndex' component={Quiz} />
              <Route path='/summary' component={Summary} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
