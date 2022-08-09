// import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//css
import '../../css/components/list.css'

const List = () => {
  const camp = useSelector((state) => state.reducer.camp);

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
    <div className='list-container'>
      <Slider {...settings}>
        {camp.map((item) => {
          const id = item.id;

          return (
              <div key={id} className='main_nav' >
                <Link className='link' to={`/${id}`}>
                  <img src="assets/img/channel_talk_btn.png" alt="campimage" />
                  <p>{item.name}</p>
                </Link>
              </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default List;
