import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
//firebase
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from 'firebase/auth';
import { signCheckFB, signOutFB } from '../y_redux/modules/signReducer';

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const userOut = () => {
    dispatch(signOutFB())
  }

  const loginCheck = (user) => {
      if (user) {
          setIsLogin(true);
          dispatch(signCheckFB(user.email));
      } else {
          setIsLogin(false);
      }
  };

  React.useEffect(() => {
      onAuthStateChanged(auth, loginCheck);
  }, []);

  return (
    <HeaderComp>
      { isLogin 
      ? <div>
          <h2>환영합니다!</h2> 
          <button onClick={userOut}>로그아웃하기</button>
        </div>
      : <div>
          <h2>로그인하세요!</h2>
          <button>로그인하러가기</button>
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