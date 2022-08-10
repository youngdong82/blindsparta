// import React from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//css
import styles from "../../css/components/list.module.css";
import { loadCampFB } from "../../y_redux/modules/redux";
import { useEffect } from "react";

const List = () => {
  const camp = useSelector((state) => state.reducer.camp_list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCampFB());
  }, [loadCampFB]);

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
          const id = item.camp_name;

          return (
            <div key={id} className={styles.main_nav}>
              <Link className={styles.link} to={`/${id}`}>
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
