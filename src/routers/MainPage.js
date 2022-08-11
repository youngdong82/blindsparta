import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from '../firebase/firebase';
import { loadCampFB } from "../y_redux/modules/campReducer";
import Modal from "../components/mainPage/Modal";
import campImg from '../asset/camp_img.png';
import addCampImg from '../asset/channel.png';
//css
import "../css/routers/mainPage.css";
import { onAuthStateChanged } from 'firebase/auth';
import { loginCheckFB } from '../y_redux/modules/signReducer';

const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [istoggle, setIsToggle] = useState(false);
  const camps = useSelector((state) => state.campReducer.campList);
  const user_data = useSelector((state)=> state.signReducer.current_user);
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
          dispatch(loginCheckFB(user.email));
          dispatch(loadCampFB())
      } else {
        navigate('/login')
      }
    })
  },[])

  const addCamp = () => {
    setIsToggle(true);
  };

  return (
    <div className='page'>
      <div className='camp_spreader' >
        <button> ㄱ </button>
        <div className='camp_container' >
          {camps.map((each) => {
            const id = each.camp_name;
            return (
              <div key={id} className='camp_box' >
                <img src={campImg} alt="campimage" />
                <Link to={`/${id}`}>{each.name}</Link>
              </div>
            );
          })}
          { user_data.admin ?
            <div className='camp_box' onClick={addCamp}>
              <img className='addImg' src={addCampImg} alt="add_camp_img" />
              추가하기
            </div>
            :
            <></>
          }
        </div>
        <button> ㄴ </button>
      </div>
      {istoggle && <Modal toggle={setIsToggle} />}
    </div>
  );
};

export default MainPage;
