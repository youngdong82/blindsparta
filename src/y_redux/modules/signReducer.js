import {collection,getDocs,where,query} from 'firebase/firestore';
import { auth, db } from "../../firebase/firebase"
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

// actions
const LOGIN = 'users/LOGIN';
const LOGOUT = 'users/LOGOUT';

const initialState = {
    current_user: {}
}

// action creater
export function login(user_data) {
    return {type:LOGIN, user_data}
}
export function logout() {
    return {type:LOGOUT}
}

//middlewares
export const loginFB = (enteredId, enteredPw) => {
    return async function signIn (dispatch){
        const user = await signInWithEmailAndPassword(auth, enteredId, enteredPw)
        const user_docs = await getDocs(query(collection(db, "users"), where("user_id", "==", user.user.email)))
        user_docs.forEach((each) => {
            dispatch(login(each.data()))
        })

    }
}
export const logoutFB = () => {
    return async function userOut(dispatch) {
        await signOut(auth);
        dispatch(logout());
    }
}
export const loginCheckFB = (emailId) => {
    return async function check(dispatch) {
        const current_user = await getDocs(query(collection(db, "users"), where("user_id", "==", emailId)));
        current_user.forEach((each) => {
            dispatch(login(each.data()))
        })
    }
} 

//reducers
export default function signReducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOGIN: {
            return { ...state, current_user: action.user_data };
        }
        case LOGOUT: {
            return { ...state, current_user : {} };
        }
        default:
            return state;
    }
}