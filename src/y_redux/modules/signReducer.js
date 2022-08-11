import {
    collection,
    getDocs,
    where,
    query,
} from 'firebase/firestore';
import { auth, db } from "../../firebase/firebase"
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

// actions

const SIGNIN = 'users/userlogin';
const SIGNOUT = 'users/userlogout';

const initialState= {
    current_user: [
        {
            userid: "",
            nickname: "",
            camp: "",
            admin : false
        }
    ]
}
// action creater

export function loginUser(user_data) {
    return {type:SIGNIN, user_data}
}

export function logout() {
    return {type:SIGNOUT}
}
//middlewares

export const signInFB = (Id, Pw) => {
    return async function signIn (dispatch){
        const usr = await signInWithEmailAndPassword(auth, Id, Pw)
        // console.log(usr);
        const user_docs = await getDocs(query(collection(db, "users"), where("userid", "==", usr.user.email)))
        
        const temp = [];
        user_docs.forEach((v) => {
            temp.push(v.data());
        })

        console.log(temp);
        dispatch(loginUser(temp))
        
    }
}

export const signCheckFB = (emailId) => {
    return async function check(dispatch) {
        const current_user = await getDocs(query(collection(db, "users"), where("userid", "==", emailId)));
        current_user.forEach((v) => {
            dispatch(loginUser(v.data()))
        })
    }
} 

export const signOutFB = () => {
    return async function userOut(dispatch) {
        await signOut(auth);
        dispatch(logout());
    }
}
//reducers

export default function signReducer(state = initialState, action = {}) {
    console.log(action)
    switch (action.type) {
        case SIGNIN: {
            return { current_user: action.user_data };
        }

        case SIGNOUT: {
            return { current_user : [{
                userid: "",
                nickname: "",
                camp: "",
                admin : false
            }] };
        }
    
        default:
            return state;
    }
}