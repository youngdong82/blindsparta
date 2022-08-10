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
            camp: ""
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

export const signOutFB = () => {
    return async function userOut(dispatch) {
        await signOut(auth);
        dispatch(logout());
    }
}
//reducers

export default function signReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SIGNIN: {
            // console.log(action.user_data);
            return { current_user: action.user_data };
        }

        case SIGNOUT: {
            return { current_user : [{
                userid: "",
                nickname: "",
                camp: ""
            }] };
        }
    
        default:
            return state;
    }
}