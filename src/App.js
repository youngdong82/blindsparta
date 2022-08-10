import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BlindBoard from "./routers/BlindBoard";
import SignForm from "./routers/signform";
import MainPage from "./routers/MainPage";
import { useDispatch } from "react-redux";
import { loadCampFB } from "./y_redux/modules/redux";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCampFB());
  }, []);

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
