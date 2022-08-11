import React, { useState } from "react";
import SignUp from "../components/signform/SignUp";
import SignIn from "../components/signform/SignIn";
//firebase
// import { auth } from "../firebase/firebase"
// import { onAuthStateChanged } from 'firebase/auth'


const SignForm = () => {
    const [isSigned, setIsSigned] = useState(false);

    const toggleIsLogin = () => {
        setIsSigned(!isSigned)
    }

    return (
    <>
        { isSigned ? 
        <SignUp toggleIsLogin={toggleIsLogin} /> 
        : <SignIn toggleIsLogin={toggleIsLogin} />}
    </>
    );
}

export default SignForm;
