import React, { useState, useEffect } from "react";
import SignUp from "../components/signform/SignUp";
import SignIn from "../components/signform/SignIn";
import { loginCheckFB } from '../y_redux/modules/signReducer';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';

const SignForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [isSigned, setIsSigned] = useState(false);
    const toggleIsLogin = () => {
        setIsSigned(!isSigned)
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/')
            }
        });
    }, []);

    return (
    <>
        { isSigned ? 
        <SignUp toggleIsLogin={toggleIsLogin} /> 
        : <SignIn toggleIsLogin={toggleIsLogin} />}
    </>
    );
}

export default SignForm;
