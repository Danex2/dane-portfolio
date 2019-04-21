import React, { Component } from "react";
import "./css/global.css";
import Name from "./components/Name";
import Links from "./components/Links";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <Name />
        <Sidebar />
        <Footer />
        <Router>
          <Links />
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
