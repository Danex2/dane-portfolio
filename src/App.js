import React, { Component } from "react";
import "./css/global.css";
import Home from './components/Home'
import Projects from './components/Projects'
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import { HashRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
        </Switch>
      </Router>
    );
  }
}

export default App;
