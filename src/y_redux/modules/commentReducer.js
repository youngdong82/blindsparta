import { collection, addDoc, getDocs, deleteDoc, doc, query, where } from "firebase/firestore";
import { db } from '../../firebase/firebase';

const LOAD = 'commentList/LOAD';
const CREATE = 'commentList/CREATE';
const REMOVE = 'commentList/REMOVE';

const initialState = {
  commentList: []
}

export function loadCommentList(commentList){
  return {type: LOAD, commentList}
}
export function createCommentList(comment_data){
  return {type: CREATE, comment_data}
}
export function removeCommentList(comment_id){
  return {type: REMOVE, comment_id}
}

// redux-thunk
export function loadCommentFB(campName, nowWeek){
  return async function(dispatch){
    const comment_firebase = await getDocs(
      query(
        collection(db, 'comment_list'),
        where('camp_name','==',campName),
        where('week','==',nowWeek)
      ));
    let commentList = [];
    comment_firebase.forEach((each) => {
      commentList.push({id: each.id, ...each.data()})
    })
    dispatch(loadCommentList(commentList))
  }
}
export function createCommentFB(comment_data){
  return async function(dispatch){
    const docRef = await addDoc(collection(db, 'comment_list'), comment_data);
    const new_commnet_data ={ id: docRef.id, ...comment_data};
    dispatch(createCommentList(new_commnet_data))
  }
}
export function removeCommentFB(comment_id){
  return async function(dispatch){
    await deleteDoc(doc(db,'comment_list',comment_id))
    dispatch(removeCommentList(comment_id))
  }
}

const commentReducer = (state = initialState, action = {}) => {
  switch(action.type){
    case LOAD:{
      return {...state, commentList: action.commentList}
    }
    case CREATE:{
      const new_comment_list = [...state.commentList, action.comment_data]
      return {...state, commentList: new_comment_list}
    }
    case REMOVE:{
      const new_comment_list = state.commentList.filter((each) => {
        return each.id !== action.comment_id
      })
      return {...state, commentList: new_comment_list}
    }
    default:
      return state;
  }
}

export default commentReducer;