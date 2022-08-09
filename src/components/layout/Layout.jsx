// 메인페이지의 바탕화면
import React from "react";
import "./style.css";
import List from "../list/List";
// import { DummyData } from "../../dummyData/dummyCamp";



const Layout = () =>{

  // const [plus, setPlus] = useState([
  //   {
  //     id :
  //     더미더미
  //   }
  // ])

  return <div className="layout">
    <h2 className="title">캠프 목록</h2>
    <hr className="bar"></hr>
    <List></List>
    {/* <button className="plusbutton" onClick={() => {
        setPlus([...List])
    }}> + </button> */}
  </div>;
};




export default Layout;