import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Science from './pages/Science/Science';
import Conservation from './pages/Conservation/Conservation';
import './styles/global.css';
import './index.css';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/science" element={<Science />} />
          <Route path="/conservation" element={<Conservation />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;