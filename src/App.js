import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import BlindBoard from "./routers/BlindBoard";
import SignForm from "./routers/signform";
import MainPage from "./routers/MainPage";
import { useDispatch, useSelector } from "react-redux";
import { loadCampFB } from "./y_redux/modules/redux";


function App() {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.signReducer.current_user[0].userid);
  

  useEffect(() => {
    dispatch(loadCampFB());
  },[]);

  const PrivateRoute = ({ children }) => {
    return userId ? ( children
    ) : (
      <Navigate to="/login" replace={true} />
    );
  }



  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          {/* <Route path="/" element={<MainPage />} /> */}
          <Route path="/login" element={<SignForm />} />
          <Route path="/:campname" element={<BlindBoard />} />
          <Route path="/" element={
            <PrivateRoute>
            < MainPage />
          </PrivateRoute>
          }
      />
        </Routes>
      </Router>
    </div>
  );
}
// sign
export default App;
