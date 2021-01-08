import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Controller from './Controller';
import Home from './Home';
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/controller">
          <Controller />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
