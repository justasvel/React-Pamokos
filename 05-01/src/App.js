import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import BeerInfo from "./components/BeerInfo";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
    <Navigation />
      <div className="container">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route path="/:id" component={ BeerInfo } />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
