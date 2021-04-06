import logo from './logo.svg';
import './App.css';
import Project from './components/Project';
import Navbar from './components/Navbar';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <h2>My Portfolio</h2>
        <Project />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
    </div>
    </Router>
  )
}

export default App;