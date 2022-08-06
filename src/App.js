import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import BlindBoard from './routers/BlindBoard';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/dongjak' element={<BlindBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
