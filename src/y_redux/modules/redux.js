const initialState = {
  camp: [
    { id: "kangwon", name: "항해1기" },
    { id: "kangwon", name: "강원4기" },
    { id: "dongjak", name: "동작3기" },
    { id: "dongjak", name: "대전2기" },
    { id: "dongjak", name: "부산5기" },
    { id: "dongjak", name: "대구6기" },
    { id: "dongjak", name: "대구9기" },
  ],
};

// Actions
const LOAD = "camp/LOAD";
const CREATE = "camp/CREATE";

// Action Creators
export function loadCamp() {
  return { type: LOAD };
}

export function createCamp(campItem) {
  return { type: CREATE, campItem };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // action의 타입마다 케이스문을 걸어주면,
    // 액션에 따라서 새로운 값을 돌려줍니다!
    case "camp/LOAD":
      return state;
    case "camp/CREATE":
      const updateCamp = [...state.camp, action.campItem];
      return { camp: updateCamp };
    default:
      return state;
  }
}
