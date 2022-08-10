import React, { useState } from "react";
import SignUp from "../components/signform/SignUp";
import SignIn from "../components/signform/SignIn";
//firebase
// import { auth } from "../firebase/firebase"
// import { onAuthStateChanged } from 'firebase/auth'


const SignForm = () => {
    const [isSigned, setIsSigned] = useState(false);
    // const [isLogin, setIsLogin] = useState(false);

    // const loginCheck = async(user) => {
    //     if (user) {
    //         setIsLogin(true);
    //     } else {
    //         setIsLogin(false);
    //     }
    // };

    // React.useEffect(() => {
    //     onAuthStateChanged(auth, loginCheck);
    // }, []);

    const toggleIsLogin = () => {
        console.log('clickeddd')
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
