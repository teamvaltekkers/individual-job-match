import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import './App.css';
import Quiz from './Quiz';
import Start from './Start';
import Profile from './Profile';
import Summary from './Summary';
import JobSwipe1 from './JobSwipe1';
import JobSwipe2 from './JobSwipe2';
import JobSwipe3 from './JobSwipe3';

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
              <Route path='/profile' component={Profile} />
              <Route path='/jobswipe1' component={JobSwipe1} />
              <Route path='/jobswipe2' component={JobSwipe2} />
              <Route path='/jobswipe3' component={JobSwipe3} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
