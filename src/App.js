import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/Home";
import Data from "./components/data/usData/Data";
// import USMap from "./components/data/usData/USMap";
import About from "./components/About";
import GlobalData from "./components/data/globalData/GlobalData";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Data />} />
        {/* <Route exact path="/us" render={() => <Data />} /> */}
        <Route exact path="/global" render={() => <GlobalData />} />
        {/* <Route exact path="/usmap" render={() => <USMap />} /> */}
        <Route exact path="/about" render={() => <About />} />
      </Switch>
    </div>
  );
}

export default App;
