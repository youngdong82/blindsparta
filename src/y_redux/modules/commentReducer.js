import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from '../../firebase/firebase';

const LOAD = 'commentList/LOAD';
const CREATE = 'commentList/CREATE';
const REMOVE = 'commentList/REMOVE';

const initialState = {
  commentList: [
  //   {id:1, user_id:'donggyu1', notion_id:'d11', comment:'저도 너무너무 동감해요',},
  //   {id:2, user_id:'donggyu1', notion_id:'d12', comment:'저도 너무너무 동감해요',},
  //   {id:3, user_id:'donggyu1', notion_id:'d13', comment:'저도 너무너무 동감해요',},
  //   {id:4, user_id:'donggyu1', notion_id:'d14', comment:'저도 너무너무 동감해요',},
  //   {id:5, user_id:'donggyu1', notion_id:'d11', comment:'그렇군요!',},
  //   {id:6, user_id:'donggyu2', notion_id:'d12', comment:'그렇군요!',},
  //   {id:7, user_id:'donggyu2', notion_id:'d13', comment:'그렇군요!',},
  //   {id:8, user_id:'donggyu2', notion_id:'d14', comment:'그렇군요!',},
  //   {id:9, user_id:'donggyu2', notion_id:'d11', comment:'피땀눈물 주륵주륵!!',},
  //   {id:10, user_id:'donggyu2', notion_id:'d12', comment:'피땀눈물 주륵주륵!!',},
  //   {id:11, user_id:'seongwon1', notion_id:'d21', comment:'저도 너무너무 동감해요',},
  //   {id:12, user_id:'seongwon1', notion_id:'d22', comment:'저도 너무너무 동감해요',},
  //   {id:13, user_id:'seongwon1', notion_id:'d23', comment:'저도 너무너무 동감해요',},
  //   {id:14, user_id:'seongwon1', notion_id:'d24', comment:'저도 너무너무 동감해요',},
  //   {id:15, user_id:'seongwon1', notion_id:'d21', comment:'그렇군요!',},
  //   {id:16, user_id:'seongwon2', notion_id:'d22', comment:'그렇군요!',},
  //   {id:17, user_id:'seongwon2', notion_id:'d23', comment:'그렇군요!',},
  //   {id:18, user_id:'seongwon2', notion_id:'d24', comment:'그렇군요!',},
  //   {id:19, user_id:'seongwon2', notion_id:'d21', comment:'피땀눈물 주륵주륵!!',},
  //   {id:20, user_id:'seongwon2', notion_id:'d22', comment:'피땀눈물 주륵주륵!!',},
  //   {id:21, user_id:'jeonghee1', notion_id:'d31', comment:'저도 너무너무 동감해요',},
  //   {id:22, user_id:'jeonghee1', notion_id:'d32', comment:'저도 너무너무 동감해요',},
  //   {id:23, user_id:'jeonghee1', notion_id:'d33', comment:'저도 너무너무 동감해요',},
  //   {id:24, user_id:'jeonghee1', notion_id:'d34', comment:'저도 너무너무 동감해요',},
  //   {id:25, user_id:'jeonghee1', notion_id:'d31', comment:'그렇군요!',},
  //   {id:26, user_id:'jeonghee2', notion_id:'d32', comment:'그렇군요!',},
  //   {id:27, user_id:'jeonghee2', notion_id:'d33', comment:'그렇군요!',},
  //   {id:28, user_id:'jeonghee2', notion_id:'d34', comment:'그렇군요!',},
  //   {id:29, user_id:'jeonghee2', notion_id:'d31', comment:'피땀눈물 주륵주륵!!',},
  //   {id:30, user_id:'jeonghee2', notion_id:'d32', comment:'피땀눈물 주륵주륵!!',},
  ]
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
export function loadCommentFB(){
  return async function(dispatch){
    const comment_firebase = await getDocs(collection(db, 'comment_list'));
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
//만들어야함.
export function removeCommentListFB(comment_id){
  return async function(dispatch){
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
        return each.id !== action.notion_id
      })
      return {...state, commentList: new_comment_list}
    }
    default:
      return state;
  }
}

export default commentReducer;