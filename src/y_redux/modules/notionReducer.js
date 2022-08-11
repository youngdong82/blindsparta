import { collection, addDoc, getDocs, deleteDoc, doc, query, where } from "firebase/firestore";
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

//미들웨어
export function loadNotionFB(campName, nowWeek){
  return async function(dispatch){
    //복합쿼리 이용
    const notion_firebase = await getDocs(
      query(
        collection(db,'notion_list'),
        where('camp_name', '==',campName),
        where('week', '==',nowWeek)
      ));
    let notionList = [];
    notion_firebase.forEach((each) => {
      notionList.push({id: each.id, ...each.data()})
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
export function removeNotionFB(notion_id){
  return async function(dispatch){
    await deleteDoc(doc(db,'notion_list',notion_id))
    dispatch(removeNotionList(notion_id));
  }
}
//리듀서 함수
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