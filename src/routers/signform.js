import React, { useState } from "react";
import SignUp from "../components/signform/SignUp";
import SignIn from "../components/signform/SignIn";
//firebase
import { auth } from "../firebase/d_firebase"
import { onAuthStateChanged } from 'firebase/auth'


const SignForm = () => {
    const [isLogin, setIsLogin] = useState(false);

    const loginCheck = async(user) => {
        if (user) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    };

    React.useEffect(() => {
        // onAuthStateChanged(auth, loginCheck);
    }, []);
    const toggleIsLogin = () => {
        console.log('clickeddd')
        setIsLogin(!isLogin)
    }

    return (
    <>
        { isLogin ? 
        <SignUp toggleIsLogin={toggleIsLogin} /> 
        : <SignIn toggleIsLogin={toggleIsLogin} />}
    </>
    );
}

export default SignForm;
