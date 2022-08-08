// 메인페이지의 바탕화면
import React from "react";
import styles from "./style.module.css";
import List from "../list/List";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <h2 className={styles.title}>캠프 목록</h2>
      <hr className={styles.bar}></hr>
      <List></List>
    </div>
  );
};

export default Layout;
