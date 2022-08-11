import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import BlindBoard from "./routers/BlindBoard";
import SignForm from "./routers/signform";
import MainPage from "./routers/MainPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<SignForm />} />
          <Route path="/:campname" element={<BlindBoard />} />
        </Routes>
      </Router>
    </div>
  );
}
// sign
export default App;
