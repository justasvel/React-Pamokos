import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Character from "./components/Character";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/:id" component={Character} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
