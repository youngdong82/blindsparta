import React, { useState } from "react";
import List from "../components/mainPage/List";
import Modal from "../components/mainPage/Modal";
//css
import '../css/routers/mainPage.css';


const MainPage = () => {
  const [istoggle, setIsToggle] = useState(false);
  const addCamp = () => {
    setIsToggle(true);
  };
  
  return (
    <div className='layout'>
      <h2 className='title'>캠프 목록</h2>
      <hr className='bar'></hr>
      <List />
      <button className='addbtn' onClick={addCamp}>
         + 
      </button>
      {istoggle && <Modal toggle={setIsToggle} />}
    </div>
  );
};

export default MainPage;