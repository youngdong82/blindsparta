import React, { useState } from "react";
import Navbar from "../components/blindBoard/Navbar";
import List from "../components/mainPage/List";
import Modal from "../components/mainPage/Modal";
//css
import styles from "../css/routers/mainPage.module.css";

const MainPage = () => {
  const [istoggle, setIsToggle] = useState(false);
  const addCamp = () => {
    setIsToggle(true);
  };

  return (
    <div className={styles.layout}>
      <h2 className={styles.title}>캠프 목록</h2>
      <hr className={styles.bar}></hr>
      <List />
      {/* <Navbar /> */}
      <button className={styles.addbtn} onClick={addCamp}>
        캠프추가하기
      </button>
      {istoggle && <Modal toggle={setIsToggle} />}
    </div>
  );
};

export default MainPage;
