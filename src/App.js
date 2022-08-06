import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import BlindBoard from './routers/BlindBoard';
import SignForm from './components/signform/sign';
import Navbar from "./components/ui/Navbar";
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/dongjak' element={<BlindBoard />} />
        </Routes>
      </Router>
      <SignForm />
      <MainPage/>
      <Navbar />
      
    </div>
  );
}
// sign
export default App;
