import { db } from '../../firebase/firebase';
import {collection, addDoc, getDocs, getDoc} from 'firebase/firestore';

const LOAD = 'campList/LOAD';
const CREATE = 'campList/CREATE';
const REMOVE = 'campList/REMOVE';

const initialState = {
  campData: {}
}

export function loadCamp(camp_data){
  return {type: LOAD, camp_data}
}
export function createCampList(camp_data){
  return {type: CREATE, camp_data}
}
export function removeCampList(camp_id){
  return {type: REMOVE, camp_id}
}

export function loadCampFB(campName){
  return async function(dispatch){
    const campListFB = await getDocs(collection(db,'camp_list'));
    let camp_data = {}
    campListFB.forEach((each) => {
      const decoded_each = each.data();
      if(decoded_each.camp_name === campName){
        camp_data = {...decoded_each}
      }
    })
    dispatch(loadCamp(camp_data))
  }
}

const campReducer = (state = initialState, action = {}) => {
  switch(action.type){
    case LOAD:{
      return {...state, campData: action.camp_data}
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