import React from "react";
import styled from "styled-components";
import { ValidationCheck } from "./validationCheck";
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from "../../firebase/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import logoImg from '../../asset/dongjak.png';

export default function SignUp({toggleIsLogin}) {

    const idInputRef = React.useRef();
    const nickNameInputRef = React.useRef();
    const pwInputRef = React.useRef();
    const pwConfirmInputRef = React.useRef();
    const selectInputRef = React.useRef();

    function onSubmitHandler(event) {
        event.preventDefault();

        const enteredId = idInputRef.current.value;
        const enteredNickName = nickNameInputRef.current.value;
        const enteredPw = pwInputRef.current.value;
        const enteredPwConfirm = pwConfirmInputRef.current.value;
        const selectedCamp = selectInputRef.current.value;

        if(ValidationCheck(enteredPw, enteredPwConfirm)){
            const signUp = async (id, nickname, pw, camp) => {
                await createUserWithEmailAndPassword(auth, id, pw)
                await addDoc(collection(db, "users"), {userid: id, nickname: nickname, camp: camp });                
            }
            signUp(enteredId, enteredNickName, enteredPw, selectedCamp);
            alert('회원가입을 완료했습니다!');
            navigate('/');
        }
        else{
            alert('다시 입력해주세요!');
        }
    }

    return (
    <SubmitForm onSubmit={onSubmitHandler}>
        <LogoSlot>
            <img src={logoImg} alt="sparta logo" />
            <p>블라인드 스파르타</p>
        </LogoSlot>
        <FieldSet>
            <label htmlFor="id">아이디</label>
            <input ref={idInputRef} type="email" id="id" name="id" placeholder="아이디" required />

            <label htmlFor="id">닉네임</label>
            <input ref={nickNameInputRef} type="text" id="nickname" name="nickname" placeholder="닉네임" required />

            <label htmlFor="pw">비밀번호</label>
            <input ref={pwInputRef} type="password" id="pw" name="pw" placeholder="비밀번호" required />

            <label htmlFor="pw-confirm">비밀번호 확인</label>
            <input ref={pwConfirmInputRef} type="password" id="pw-confirm" name="pw-confirm" placeholder="비밀번호 확인" required />

            <select ref={selectInputRef} name="camp" id="camp">
                <option value="">캠프를 선택하세요</option>
                <option value="서울">서울</option>
                <option value="동작">동작</option>
                <option value="강원">강원</option>
            </select>
            <div>
                <button onClick={toggleIsLogin} type='button'>로그인하기</button>
                <button>확인</button>
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