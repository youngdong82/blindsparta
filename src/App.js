import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import BlindBoard from './routers/BlindBoard';
import MainPage from './pages/MainPage';
import SignForm from './routers/signform'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/login' element={<SignForm />} />
          <Route path='/dongjak' element={<BlindBoard />} />
        </Routes>
      </Router>
    </div>
  );
}
// sign
export default App;
