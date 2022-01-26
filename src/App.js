import logo from './logo.svg';
import './App.css';
import Nav from './Navbar.js';
import Home from './Home.js';
import Restaurant from './Restaurant';
import Notes from './Notes';

function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <Restaurant/>
      <Notes/>
    </div>
  )
}

export default App;
