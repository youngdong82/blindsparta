import React, { useState } from "react";
import SignUp from "../components/signform/SignUp";
import SignIn from "../components/signform/SignIn";

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
