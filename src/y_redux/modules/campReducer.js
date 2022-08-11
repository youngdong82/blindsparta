import { db } from '../../firebase/firebase';
import {collection, addDoc, getDocs, getDoc} from 'firebase/firestore';

const LOAD = 'campList/LOAD';
const LOADMAIN = 'campList/LOADMAIN';
const CREATE = 'campList/CREATE';
const REMOVE = 'campList/REMOVE';

const initialState = {
  campList:[],
  campData: {}
}

export function loadCamp(camp_data){
  return {type: LOAD, camp_data}
}
export function loadCampMain(camp_list){
  return {type: LOADMAIN, camp_list}
}
export function createCampList(camp_data){
  return {type: CREATE, camp_data}
}
export function removeCampList(camp_id){
  return {type: REMOVE, camp_id}
}

export function loadCampFB(campName){
  return async function(dispatch){
    if(campName !== undefined){
      const campListFB = await getDocs(collection(db,'camp_list'));
      let camp_data = {}
      campListFB.forEach((each) => {
        const decoded_each = each.data();
        if(decoded_each.camp_name === campName){
          camp_data = {...decoded_each}
        }
      })
      dispatch(loadCamp(camp_data))
    } else{
      const campListFB = await getDocs(collection(db,'camp_list'));
      let camp_list = []
      campListFB.forEach((each) => {
        camp_list.push({...each.data()})
      })
      dispatch(loadCampMain(camp_list))
    }
  }
}
export const createCampFB = (camp) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "camp_list"), camp);
    const camp_data = { id: docRef.id, ...camp };
    dispatch(createCampList(camp_data));
  };
};

const campReducer = (state = initialState, action = {}) => {
  switch(action.type){
    case LOAD:{
      return {...state, campData: action.camp_data}
    }
    case LOADMAIN:{
      return {...state, campList: action.camp_list}
    }
    case CREATE:{
      const new_camp_list = [...state.campList, action.camp_data]
      return {...state, campList: new_camp_list}
    }
    case REMOVE:{
      const new_camp_list = state.campList.filter((each) => {
        return each.id !== action.camp_id
      })
      return {...state, campList: new_camp_list}
    }
    default:
      return state;
  }
}

export default campReducer;