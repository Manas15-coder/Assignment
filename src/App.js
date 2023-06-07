import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home.js';
import Visited from './Visited';

function App() {
  return (
      <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/visited" element={<Visited/>}/>
        </Routes>
      </Router>
      </>
      
  );
}

export default App;
