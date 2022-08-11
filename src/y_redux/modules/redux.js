import {
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";

import { db } from "../../firebase/firebase";

const initialState = {
  camp_list: [
  ],
};

// Actions
const LOAD = "camp/LOAD";
const CREATE = "camp/CREATE";

// Action Creators
export function loadCamp(camp_list) {
  return { type: LOAD, camp_list };
}

export function createCamp(campItem) {
  return { type: CREATE, campItem };
}

//파이어베이스랑 통신하는 부분
//load
export const loadCampFB = () => {
  return async function (dispatch) {
    // 데이터를 가져와요!
    const camp_data = await getDocs(collection(db, "camp_list"));
    let camp_list = [];

    // 하나씩 우리가 쓸 수 있는 배열 데이터로 만들어줍시다!
    camp_data.forEach((b) => {
      // 콘솔로 확인해요!
      camp_list.push({ id: b.id, ...b.data() });
    });
  }
};

//add
export const createCampFB = (camp) => {
  return async function (dispatch) {
    // 파이어스토어에 추가하기를 기다려요!
    const docRef = await addDoc(collection(db, "camp_list"), camp);
    // 추가한 데이터 중 id를 가져와서 bucket_data를 만들어줬어요!
    const camp_data = { id: docRef.id, ...camp };
    // 그럼 이제 액션을 일으키자! (수정해달라고 요청하자!)
    dispatch(createCamp(camp_data));
  };
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // action의 타입마다 케이스문을 걸어주면,
    // 액션에 따라서 새로운 값을 돌려줍니다!
    case "camp/LOAD":
      return { camp_list: action.camp_list };
    case "camp/CREATE":
      const updatedCamp = [...state.camp_list, action.campItem];
      return { camp_list: updatedCamp };
    default:
      return state;
  }
}
