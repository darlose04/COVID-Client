import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/Home";
import Data from "./components/data/Data";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/usdata" render={() => <Data />} />
        <Route exact path="/about" render={() => <About />} />
      </Switch>
    </div>
  );
}

export default App;
