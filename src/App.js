import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <div className="App" id="bg">
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
