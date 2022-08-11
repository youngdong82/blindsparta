import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadCampFB } from "../y_redux/modules/redux";
import Modal from "../components/mainPage/Modal";
import campImg from '../asset/camp_img.png';
import addCampImg from '../asset/channel.png';
//css
import "../css/routers/mainPage.css";

const MainPage = () => {
  const [istoggle, setIsToggle] = useState(false);
  const addCamp = () => {
    setIsToggle(true);
  };
  const camp = useSelector((state) => state.reducer.camp_list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCampFB());
  }, [loadCampFB]);


  return (
    <div className='page'>
      <div className='camp_spreader' >
        <button> ㄱ </button>
        <div className='camp_container' >
          {camp.map((each) => {
            const id = each.camp_name;
            return (
              <div key={id} className='camp_box' >
                <img src={campImg} alt="campimage" />
                <Link to={`/${id}`}>{each.name}</Link>
              </div>
            );
          })}
            <div className='camp_box' onClick={addCamp}>
              <img className='addImg' src={addCampImg} alt="add_camp_img" />
              추가하기
            </div>
        </div>
        <button> ㄴ </button>
      </div>
      {istoggle && <Modal toggle={setIsToggle} />}
    </div>
  );
};

export default MainPage;
