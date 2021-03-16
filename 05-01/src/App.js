import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import BeerInfo from "./components/BeerInfo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/:id" component={ BeerInfo } />
        </Switch>
      </div>
    </div>
  );
}

export default App;
