import React from "react";
import "./style.css";
import List from "../list/List";



const Layout = () =>{
  return <div className="layout">
    <h2 className="title">캠프 목록</h2>
    <hr className="bar"></hr>
    <List></List>
  </div>;
};

export default Layout;