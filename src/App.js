import logo from './logo.svg';
import './App.css';
import Project from './components/Project';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h2>My Portfolio</h2>
      <Project />
    </div>
  )
}

export default App;