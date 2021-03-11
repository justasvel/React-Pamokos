import React from 'react';

import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
