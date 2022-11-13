import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';
import './index.css';
import Home from './pages/home'
import Photo from './pages/photos'
import Vector from './pages/vectors';

function App() {
  return (
    <Router>
      <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photo />} />
          <Route path="/vectors" element={<Vector />} />
      </Routes>
    </Router>

  );
}

export default App;
