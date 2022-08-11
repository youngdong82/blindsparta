import React, { useRef, useState } from "react";
import styled from "styled-components";
import { ValidationCheck } from "./validationCheck";
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from "../../firebase/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import logoImg from '../../asset/dongjak.png';

export default function SignUp({toggleIsLogin}) {
    const signupIDRef = useRef(null);
    const signupUsernameRef = useRef(null);
    const signupPWRef = useRef(null);
    const signupPWConfirmRef = useRef(null);
    const signupAdminRef = useRef(null);
    const signupCampRef = useRef(null);

    const doSignup = async()  => {
        const idValue = signupIDRef.current.value;
        const usernameValue = signupUsernameRef.current.value;
        const pwValue = signupPWRef.current.value;
        const pwConfirmValue = signupPWConfirmRef.current.value;
        const adminValue = signupAdminRef.current.checked;
        const selectedValue = signupCampRef.current.value;

        if(ValidationCheck(pwValue, pwConfirmValue)){
            const user = await createUserWithEmailAndPassword(auth,idValue, pwValue);
            const user_data = {
                user_id: user.user.email,
                name: usernameValue,
                admin: adminValue,
                camp_name: selectedValue
            }
            await addDoc(collection(db,'users'),user_data)
        }else{
            alert('다시 입력해주세요')
        }
    }

    return (
    <SubmitForm>
        <LogoSlot>
            <img src={logoImg} alt="sparta logo" />
            <p>블라인드 스파르타</p>
        </LogoSlot>
        <FieldSet>
            <label>아이디</label>
            <input ref={signupIDRef} type="email" placeholder="아이디" />

            <label>닉네임</label>
            <input ref={signupUsernameRef} type="text" placeholder="닉네임" />

            <label>비밀번호</label>
            <input ref={signupPWRef} type="password" placeholder="비밀번호" />

            <label>비밀번호 확인</label>
            <input ref={signupPWConfirmRef} type="password" placeholder="비밀번호 확인" />

            <label>관리자라면 체크해주세요</label>
            <input ref={signupAdminRef} type="checkbox"/>

            <select ref={signupCampRef}>
                <option value="" disabled>캠프를 선택하세요</option>
                <option value="서울">서울</option>
                <option value="동작">동작</option>
                <option value="강원">강원</option>
            </select>
            <div>
                <button onClick={toggleIsLogin} >로그인하기</button>
                <button onClick={doSignup}>확인</button>
            </div>
        </FieldSet>
    </SubmitForm>)
}


const SubmitForm = styled.div`
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

const FieldSet = styled.div`
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