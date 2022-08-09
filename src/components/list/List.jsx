// import React from "react";
import * as React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../card/Card";
// import { useNavigate } from "react-router-dom"
// import campimage from "../../../public/assets/img/channel_talk_btn.png"
import {DummyData} from "../../dummyData/dummyCamp";



// const DummyData = [
//   {id: "dongjak", title: "항해1기"},
//   {id: "dongjak", title: "동작이노베이션캠프"},
//   {id: "dongjak", title: "항해2기"},
//   {id: "dongjak", title: "항해3기"},
//   {id: "dongjak", title: "항해4기"},
//   {id: "dongjak", title: "항해5기"},
//   {id: "dongjak", title: "항해6기"},
//   {id: "dongjak", title: "항해7기"}
// ];

const List = () =>{
  
  // const navigate = useNavigate();
  // const clickEvent = (id) => {
  //   navigate(`/${id}`)
  // }

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 3,
    dots: true,
  };

  return (
    <div className="list-container">
      <Slider {...settings}>
        {DummyData.map((item) => {
            const id = item.id;
          
            
          return(
          <div>
          <Card key = {id}>
          {/* onClick = {()=> clickEvent(id)} */}
           
              <Link className="link" to={`/${id}`}>
              <img src="assets/img/channel_talk_btn.png" alt="campimage"/>
              <p>{item.title}</p>
              </Link>
            
          </Card>
          </div>)  
          
        })}
        
      </Slider>
    </div>
  );
};

export default List;
