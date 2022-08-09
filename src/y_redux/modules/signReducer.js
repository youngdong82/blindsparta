import {
    collection,
    addDoc,
    getDoc,
    getDocs,
    where,
    query,
    deleteDoc,
} from 'firebase/firestore';
import { auth, db } from "../../firebase/d_firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// actions

const SIGNUP = 'users/userAdded';
const SIGNIN = 'users/userlogin';
const SIGNOUT = 'users/userlogout';
// const SIGNIN = 'users/userlogin';

const initialState= {
    users: [
        {
            id: "",
            userid: "",
            password:"",
            camp:"",
        }
    ],
    current_user: [
        {
            userid: "",
            camp: ""
        }
    ],
    isLoggedIn : false,
}
// action creater

export function join(user_data) {
    return {type:SIGNUP, user_data}
}

export function login(curUser) {
    return {type:SIGNIN, curUser}
}

export function logout() {
    return {type:SIGNOUT}
}
//middlewares

export const signUpFB = (Id, Pw, Camp) => {
    return async function signUp(dispatch) {
        const user = await createUserWithEmailAndPassword(auth, Id, Pw);
        const user_doc = await addDoc(collection(db, "users"), {userid: Id, password: Pw, camp: Camp });
        const _user_data = await getDoc(user_doc);

        // console.log(_user_data.data());
        dispatch(join({id:_user_data.id, ..._user_data.data()}));
    }
}

export const signInFB = (Id, Pw) => {
    return async function signIn (dispatch){
        const user = await signInWithEmailAndPassword(auth, Id, Pw);
        const user_docs = await getDocs(query(collection(db, "users"), where("userid", "==", user.user.email)))
        
        const tray = [];
        user_docs.forEach((v) => { tray.push(v.data())});
        const currentUser = tray[0];

        // console.log({ userid:currentUser.userid, camp:currentUser.camp });

        dispatch(login({userid:currentUser.userid, camp:currentUser.camp}));
    }
}

//reducers

export default function signReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SIGNUP: {
            // const imsi = {
            //     ...state,
            //     users: [
            //         ...state.users,
            //         action.user_data
            //     ]
            // }
            // console.log(imsi);
            return {
                ...state,
                users: [
                    ...state.users,
                    action.user_data
                ]
            };
        }
            
        case SIGNIN: {
            const imsi = {
                    ...state,
                    users: [
                        ...state.users
                    ],
                    current_user: [
                        action.curUser
                    ],
                    isLoggedIn: true,
                }
            console.log(imsi);
            return {
                ...state,
                users: [
                    ...state.users
                ],
                current_user: [
                    action.curUser
                ],
                isLoggedIn: true,
            };
        }

        case SIGNOUT: {
            return {
                ...state,
                isLoggedIn: false
            };
        }
    
        default:
            return state;
    }
}