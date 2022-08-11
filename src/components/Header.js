import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate} from 'react-router-dom'
//firebase
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from 'firebase/auth';
import { loginCheckFB, logoutFB } from '../y_redux/modules/signReducer';
import { Link } from "react-router-dom";

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user_data = useSelector((state)=> state.signReducer.current_user);

  const userOut = () => {
    dispatch(logoutFB())
    navigate('/login')
  }

  const loginCheck = (user) => {
      if (user) {
          setIsLogin(true);
          dispatch(loginCheckFB(user.email));
      } else {
          setIsLogin(false);
      }
  };

  useEffect(() => {
      onAuthStateChanged(auth, loginCheck);
  }, []);

  return (
    <HeaderComp>
      { isLogin 
      ? <div>
          <h2>로고입니다.</h2> 
          <span>{user_data.camp_name}</span>
          <button onClick={userOut}>{user_data.name}</button>
        </div>
      : <div>
          <h2>로고입니다.</h2> 
          <span>캠프 이름</span>
          <button>유저이름</button>
        </div>
      }
    </HeaderComp>
  );
}


const HeaderComp = styled.header`
  width: 100vw;
  height: 6vh;
  background: #E3344D;
  & div{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color:white;
  }
  & button{
    width: 150px;
    height: 25px;
  }
`


export default Header;