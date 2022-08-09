import React from "react";
import styled from "styled-components";

import { useDispatch } from 'react-redux';
import { ValidationCheck } from "./validationCheck";
import { signUpFB } from '../../features/sign/signSlice';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const idInputRef = React.useRef();
    const pwInputRef = React.useRef();
    const pwConfirmInputRef = React.useRef();
    const selectInputRef = React.useRef();

    function onSubmitHandler(event) {
        event.preventDefault();

        const enteredId = idInputRef.current.value;
        const enteredPw = pwInputRef.current.value;
        const enteredPwConfirm = pwConfirmInputRef.current.value;
        const selectedCamp = selectInputRef.current.value;

        if(ValidationCheck(enteredPw, enteredPwConfirm)){
            dispatch(signUpFB(enteredId, enteredPw, selectedCamp));
            alert('회원가입을 완료했습니다!');
            // navigate(-1);
        }
        else{
            alert('다시 입력해주세요!');
        }
    }

    return (
    <SubmitForm className="signform" onSubmit={onSubmitHandler}>
        <LogoSlot className="signform__logo">
            <Logo className="signform__logo--logo" src="../../../public/img/logo_v2.svg" alt="sparta logo" />
            <LogoTitle className="signform__logo--name">블라인드 스파르타</LogoTitle>
        </LogoSlot>
        <FieldSet className="signform__input">
            {/* <label htmlFor="id">아이디</label> */}
            <InputBox className="signform__input--text" type="email" id="id" name="id" placeholder="아이디" ref={idInputRef} required></InputBox>
            {/* <label htmlFor="pw">비밀번호</label> */}
            <InputBox className="signform__input--text" type="password" id="pw" name="pw" placeholder="비밀번호" ref={pwInputRef} required></InputBox>
            {/* <label htmlFor="pw-confirm">비밀번호 확인</label> */}
            <InputBox className="signform__input--text" type="password" id="pw-confirm" name="pw-confirm" placeholder="비밀번호 확인" ref={pwConfirmInputRef} required></InputBox>
            <SelectBox name="camp" id="camp" ref={selectInputRef}>
                <option value="">캠프를 선택하세요</option>
                <option value="서울">서울</option>
                <option value="동작">동작</option>
                <option value="강원">강원</option>
            </SelectBox>
            <div>
                <Btn type="button">취소</Btn>
                <Btn>확인</Btn>
            </div>
        </FieldSet>
    </SubmitForm>)
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