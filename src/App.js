import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BlindBoard from "./routers/BlindBoard";
import SignForm from "./components/signform/sign";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
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
