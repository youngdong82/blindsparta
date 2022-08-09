import React, { useState } from "react";

import SignUp from "../components/signform/SignUp";
import SignIn from "../components/signform/SignIn";

import { auth, db } from "../firebase/firebase"
import { onAuthStateChanged } from 'firebase/auth';

const SignForm = () => {
    const [isLogin, setIsLogin] = useState(false);

    const loginCheck = async (user) => {
        if (user) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    };

    React.useEffect(() => {
        onAuthStateChanged(auth, loginCheck);
    }, []);

    return (
    <>
        { false
        ? <SignUp />
        : <SignIn />}
    </>
    );
}

export default SignForm;
