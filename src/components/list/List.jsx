// import React from "react";

import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import styles from "./style.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../card/Card";
import { useSelector } from "react-redux";
import DUMMY_CAMP_CARD from "../../dummyData/dummyCampCard";

// import campimage from "../../../public/assets/img/channel_talk_btn.png"

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
    <div className={styles[`list-container`]}>
      <Slider {...settings}>
        {camp.map((item) => {
          const id = item.id;

          return (
            <div className={styles.asd}>
              <Card key={id}>
                <Link className={styles.link} to={`/${id}`}>
                  <img src="assets/img/channel_talk_btn.png" alt="campimage" />
                  <p>{item.name}</p>
                </Link>
              </Card>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default List;
