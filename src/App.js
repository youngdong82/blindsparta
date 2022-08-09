import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BlindBoard from "./routers/BlindBoard";
import SignForm from './routers/signform'
import MainPage from "./pages/MainPage";
import { Provider } from "react-redux";
import store from "./slickRedux/store";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<SignForm />} />
            <Route path="/:campname" element={<BlindBoard />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}
// sign
export default App;
