import React from "react";
import styled from "styled-components";

import { useDispatch } from 'react-redux';
import { signInFB } from '../../features/sign/signSlice';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const idInputRef = React.useRef();
    const pwInputRef = React.useRef();

    function onSubmitHandler(event) {
        event.preventDefault();

        const enteredId = idInputRef.current.value;
        const enteredPw = pwInputRef.current.value;

        dispatch(signInFB(enteredId, enteredPw));
        // navigate(-1);
    }

    return(
        <SubmitForm className="signform" onSubmit={onSubmitHandler}>
            <LogoSlot className="signform__logo">
                <Logo className="signform__logo--logo" src="../../../public/img/logo_v2.svg" alt="sparta logo" />
                <LogoTitle className="signform__logo--name">블라인드 스파르타</LogoTitle>
            </LogoSlot>
            <FieldSet className="signform__input" onSubmit={onSubmitHandler}>
                {/* <label htmlFor="id">아이디</label> */}
                <InputBox className="signform__input--text" type="email" id="id" name="id" placeholder="아이디" ref={idInputRef} required></InputBox>
                {/* <label htmlFor="pw">비밀번호</label> */}
                <InputBox className="signform__input--text" type="password" id="pw" name="pw" placeholder="비밀번호" ref={pwInputRef} required></InputBox>
                <div>
                    <Btn type="button">취소</Btn>
                    <Btn>확인</Btn>
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
`

const Logo = styled.img`
    height: 50px;
`

const LogoTitle = styled.p`
    font-size: 1.5rem;
    font-weight: 700;
`


const FieldSet = styled.fieldset`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 45%;
    padding: 0.5rem 1rem 0.5rem 1rem;
`

const InputBox = styled.input`
    width: 90%;
    margin: 0.5rem 0;
`

const SelectBox = styled.select`
    width: 90%;
    margin: 0.5rem 0;
`


const Btn = styled.button`
    width: 100px;
    margin: 0.5rem;
    background-color: skyblue;
    border-radius: 2px;
`