import React from 'react';
import SignForm from './components/signform/sign';
import Navbar from "./components/ui/Navbar";
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <SignForm />
      <MainPage/>
      <Navbar />
      
    </div>
  );
}
// sign
export default App;
