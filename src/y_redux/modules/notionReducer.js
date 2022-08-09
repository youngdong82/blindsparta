import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from '../../firebase/firebase';
// 액션
const LOAD = 'notionList/LOAD';
const CREATE = 'notionList/CREATE';
const REMOVE = 'notionList/REMOVE';

const initialState = {
  notionList: []
}

//액션 생성 함수
export function loadNotionList(notionList){
  return {type: LOAD, notionList}
}
export function createNotionList(notion_data){
  return {type: CREATE, notion_data}
}
export function removeNotionList(notion_id){
  return {type: REMOVE, notion_id}
}

export function loadNotionFB(campName, nowWeek){
  return async function(dispatch){
    const notion_firebase = await getDocs(collection(db, 'notion_list'));
    let notionList = [];
    notion_firebase.forEach((each) => {
      const decoded_each = each.data();
      if(decoded_each.camp_name === campName && decoded_each.week === nowWeek){
        notionList.push({id: each.id, ...decoded_each})
      }
    })
    dispatch(loadNotionList(notionList))
  }
}
export function createNotionFB(newNowData){
  return async function(dispatch){
    const docRef = await addDoc(collection(db, 'notion_list'), newNowData);
    const new_notion_data = {id: docRef.id, ...newNowData};
    dispatch(createNotionList(new_notion_data));
  }
}

const notionReducer = (state=initialState, action={}) => {
  switch (action.type){
    case LOAD:{
      return {...state, notionList: action.notionList}
    }
    case CREATE:{
      const new_notion_list = [ action.notion_data, ...state.notionList];
      return {...state, notionList: new_notion_list}
    }
    case REMOVE:{
      const new_notion_list = state.notionList.filter((each) => {
        return each.id !== action.notion_id
      })
      return {...state, notionList: new_notion_list}
    }
    default:
      return state;
  }
}

export default notionReducer;