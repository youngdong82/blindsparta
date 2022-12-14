import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from '../../firebase/firebase';
// 액션
const LOAD = 'notionList/LOAD';
const CREATE = 'notionList/CREATE';
const REMOVE = 'notionList/REMOVE';

const initialState = {
  notionList: []
  // 'dongjak':{
  //   "week_1":[
  //     {id: 'd11', user_id: 'youngdong1', title: '1주차는 재밌어요', description:'정말 재밋어요', like: 32,},
  //     {id: 'd12', user_id: 'youngdong2', title: '1주차는 너무 재밌어요', description:'정말 재밋어요', like: 5,},
  //     {id: 'd13', user_id: 'youngdong3', title: '1주차는 많이 많이 재밌어요', description:'정말 재밋어요', like: 14,},
  //     {id: 'd14', user_id: 'youngdong4', title: '1주차는 그냥 재밌어요', description:'정말 재밋어요', like: 1,}
  //   ],
  //   "week_2":[
  //     {id: 'd21', user_id: 'donggyu1', title: '2주차는 재밌어요', description:'정말 재밋어요', like: 32,},
  //     {id: 'd22', user_id: 'donggyu2', title: '2주차는 너무 재밌어요', description:'정말 재밋어요', like: 5,},
  //   ],
  //   "week_3":[
  //     {id: 'd31', user_id: 'seongwon1', title: '3주차는 재밌어요', description:'정말 재밋어요', like: 32,},
  //     {id: 'd32', user_id: 'seongwon2', title: '3주차는 너무 재밌어요', description:'정말 재밋어요', like: 5,},
  //     {id: 'd33', user_id: 'seongwon3', title: '3주차는 많이 많이 재밌어요', description:'정말 재밋어요', like: 14,},
  //     {id: 'd34', user_id: 'seongwon4', title: '3주차는 그냥 재밌어요', description:'정말 재밋어요', like: 6,},
  //     {id: 'd35', user_id: 'seongwon5', title: '3주차는 힘들어요', description:'정말 재밋어요', like: 19,}
  //   ],
  //   "week_4":[
  //     {id: 'd31', user_id: 'jeonghee1', title: '4주차는 재밌어요', description:'정말 재밋어요', like: 32,},
  //     {id: 'd32', user_id: 'jeonghee2', title: '4주차는 너무 재밌어요', description:'정말 재밋어요', like: 5,},
  //     {id: 'd33', user_id: 'jeonghee3', title: '4주차는 많이 많이 재밌어요', description:'정말 재밋어요', like: 14,}
  //   ],
  // },
  // 'kangwon':{
  //   "week_1":[
  //     {id: 'k11', user_id: 'youngdong1', title: '1주차는 재밌어요', description:'정말 재밋어요', like: 32,},
  //     {id: 'k12', user_id: 'youngdong2', title: '1주차는 너무 재밌어요', description:'정말 재밋어요', like: 5,},
  //     {id: 'k13', user_id: 'youngdong3', title: '1주차는 많이 많이 재밌어요', description:'정말 재밋어요', like: 14,},
  //     {id: 'k14', user_id: 'youngdong4', title: '1주차는 그냥 재밌어요', description:'정말 재밋어요', like: 1,}
  //   ],
  //   "week_2":[
  //     {id: 'k21', user_id: 'donggyu1', title: '2주차는 재밌어요', description:'정말 재밋어요', like: 32,},
  //     {id: 'k22', user_id: 'donggyu2', title: '2주차는 너무 재밌어요', description:'정말 재밋어요', like: 5,},
  //     {id: 'k23', user_id: 'donggyu3', title: '2주차는 많이 많이 재밌어요', description:'정말 재밋어요', like: 14,}
  //   ],
  //   "week_3":[
  //     {id: 'k31', user_id: 'seongwon1', title: '3주차는 재밌어요', description:'정말 재밋어요', like: 32,},
  //     {id: 'k32', user_id: 'seongwon2', title: '3주차는 너무 재밌어요', description:'정말 재밋어요', like: 5,},
  //     {id: 'k33', user_id: 'seongwon3', title: '3주차는 많이 많이 재밌어요', description:'정말 재밋어요', like: 14,},
  //     {id: 'k34', user_id: 'seongwon4', title: '3주차는 그냥 재밌어요', description:'정말 재밋어요', like: 6,},
  //     {id: 'k35', user_id: 'seongwon5', title: '3주차는 힘들어요', description:'정말 재밋어요', like: 19,}
  //   ],
  //   "week_4":[
  //     {id: 'k31', user_id: 'jeonghee1', title: '4주차는 재밌어요', description:'정말 재밋어요', like: 32,},
  //     {id: 'k32', user_id: 'jeonghee2', title: '4주차는 너무 재밌어요', description:'정말 재밋어요', like: 5,},
  //     {id: 'k33', user_id: 'jeonghee3', title: '4주차는 많이 많이 재밌어요', description:'정말 재밋어요', like: 14,}
  //   ],
  // }
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

export function loadNotionFB(campName){
  return async function(dispatch){
    const notion_firebase = await getDocs(collection(db, 'notion_list'));
    let notionList = [];
    notion_firebase.forEach((each) => {
      const decoded_each = each.data();
      if(decoded_each.camp_name === campName){
        notionList.push({...decoded_each})
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
      const new_notion_list = [ action.new_notion_data, ...state.notionList];
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