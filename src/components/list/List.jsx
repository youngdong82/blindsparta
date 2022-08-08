// import React from "react";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../card/Card";

const List = () => {
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
        <div>
          <Card></Card>
        </div>
        <div>
          <Card></Card>
        </div>
        <div>
          <Card></Card>
        </div>
        <div>
          <Card></Card>
        </div>
        <div>
          <Card></Card>
        </div>
        <div>
          <Card></Card>
        </div>
        <div>
          <Card></Card>
        </div>
        <div>
          <Card></Card>
        </div>
        <div>
          <Card></Card>
        </div>
        <div>
          <Card></Card>
        </div>
        <div>
          <Card></Card>
        </div>
        <div>
          <Card></Card>
        </div>
        <div>
          <Card></Card>
        </div>
        <div>
          <Card></Card>
        </div>
        <div>
          <Card></Card>
        </div>
        <div>
          <Card></Card>
        </div>
      </Slider>
    </div>
  );
};

export default List;
