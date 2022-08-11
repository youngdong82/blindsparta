import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadCampFB } from "../../y_redux/modules/campReducer";
import campImg from '../../asset/camp_img.png';
//css
import '../../css/components/navbar.css'

const Navbar = ({campName}) => {
  const camp = useSelector((state) => state.campReducer.campList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCampFB());
  }, [loadCampFB]);

  return (
    <div className='camp_spreader__vertical' >
    <button> ㄱ </button>
    <div className='camp_container__vertical' >
      {camp.map((each) => {
        const id = each.camp_name;
        return (
          <div key={id} className='camp_box__nav' >
            <img src={campImg} alt="campimage" />
            <Link to={`/${id}`}>{each.name}</Link>
          </div>
        );
      })}
    </div>
    <button> ㄴ </button>
  </div>
  );
};

export default Navbar;