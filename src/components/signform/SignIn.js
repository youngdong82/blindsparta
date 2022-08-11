import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from 'react-redux';
import { signInFB } from '../../y_redux/modules/signReducer';
import { useNavigate } from 'react-router-dom';
import logoImg from '../../asset/dongjak.png';

import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from 'firebase/auth';

export default function SignIn({toggleIsLogin}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userId = useSelector(state => state.signReducer.current_user[0].userid);

    //로그인 관련
    const idInputRef = React.useRef();
    const pwInputRef = React.useRef();

    //로그인유무
    const loginCheck = (user) => {
        if (user) {
            navigate('/') ;
        } else {
            navigate('/login');
        }
    };
  
    React.useEffect(() => {
        if (userId) {
            navigate('/') ;
        } else {
            navigate('/login');
        }
    }, [userId]);

    function onSubmitHandler(event) {
        event.preventDefault();
        const enteredId = idInputRef.current.value;
        const enteredPw = pwInputRef.current.value;
        dispatch(signInFB(enteredId, enteredPw));
    }

    return(
        <SubmitForm onSubmit={onSubmitHandler}>
            <LogoSlot >
                <img src={logoImg} alt="logoImg" />
                <p>블라인드 스파르타</p>
            </LogoSlot>
            <FieldSet>
                <label htmlFor="id">아이디</label>
                <input type="email" id="id" name="id" placeholder="아이디" ref={idInputRef} required />
                <label htmlFor="pw">비밀번호</label>
                <input type="password" id="pw" name="pw" placeholder="비밀번호" ref={pwInputRef} required />
                <div>
                    <button onClick={toggleIsLogin} type='button'>회원가입 하기</button>
                    <button>확인</button>
                </div>
            </FieldSet>
        </SubmitForm>
    )
}

const SubmitForm = styled.form`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #171f29;
    color: #fff;
    line-height: 1.6;
    padding: 3rem;
`;

const LogoSlot = styled.div`
    width: 45%;
    border:1px solid #fff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 2rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    & img{
        height: 50px;
    }
    & p{
        font-size: 1.5rem;
        font-weight: 700;
    }
`

const FieldSet = styled.fieldset`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 45%;
    padding: 0.5rem 1rem 0.5rem 1rem;
    & input{
        width: 90%;
        margin: 0.5rem 0;
    }
    & div > button{
        width: 100px;
        margin: 0.5rem;
        background-color: skyblue;
        border-radius: 2px;
    }
`