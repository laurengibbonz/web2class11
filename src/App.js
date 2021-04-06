import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Project from './components/Project';
import Navbar from './components/Navbar';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }
  componentDidMount() {
    console.log('react component mounted');
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ projects: data });
      });
  }
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <h2>My Portfolio</h2>
          <Project projects={this.state.projects} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </div>
      </Router>
    )
  }
}

export default App;