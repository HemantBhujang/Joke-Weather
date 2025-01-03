import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Jocker from './Component/Jocker';
import WeatherApp from './Component/WeatherApp';
import img from './Component/Images/pexels-eberhardgross-640781.jpg'

const App = () => {
  return (
    <Router>
      <main style={{ textAlign: "center",backgroundImage :{img} }}>
        <h1 style={{ color: 'blue' }}>Welcome to My Joke & Weather App</h1>
        <div style={{ marginBottom: '20px'}}>
          <Link to="/jocker">
            <button style={{ margin: '0 10px', padding: '10px 20px', cursor: 'pointer' }}>Joker</button>
          </Link>
          <Link to="/weather">
            <button style={{ margin: '0 10px', padding: '10px 20px', cursor: 'pointer' }}>Weather</button>
          </Link>
        </div>
        <div>
          <Routes>
            <Route path="/jocker" element={<Jocker />} />
            <Route path="/weather" element={<WeatherApp />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
};

export default App;
