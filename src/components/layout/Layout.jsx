// 메인페이지의 바탕화면
import React from "react";
import styles from "./style.module.css";
import List from "../list/List";
import Modal from "../ui/Modal";
import { useState } from "react";
const Layout = () => {
  const [istoggle, setIsToggle] = useState(false);
  const addCamp = () => {
    setIsToggle(true);
  };
  return (
    <div className={styles.layout}>
      <h2 className={styles.title}>캠프 목록</h2>
      <hr className={styles.bar}></hr>
      <List></List>
      <button className={styles.addbtn} onClick={addCamp}>
        캠프추가하기
      </button>
      {istoggle && <Modal toggle={setIsToggle} />}
    </div>
  );
};

export default Layout;
