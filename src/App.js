import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BlindBoard from './routers/BlindBoard';

function App() {
  return (
    <div className="App">
      열심히 해보아요.
      <Router>
        <Routes>
          <Route path='/dongjak' element={<BlindBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
