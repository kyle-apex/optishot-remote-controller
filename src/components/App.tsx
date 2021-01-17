import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Controller from '../pages/Controller/Controller';
import Home from '../pages/Home';
import Div100vh from 'react-div-100vh';
export default function App() {
  return (
    <Div100vh>
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
    </Div100vh>
  );
}
