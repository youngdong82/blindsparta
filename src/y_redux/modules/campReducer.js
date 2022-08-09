import campImg from '../../asset/camp_img.png';

const LOAD = 'campList/LOAD';
const CREATE = 'campList/CREATE';
const REMOVE = 'campList/REMOVE';

const initialState = {
  'dongjak': {
    name: '이노베이션 in 동작',
    date: '2022.07.11 ~ 2022.10.21',
    time: '월~토(공휴일 제외) 오전 9시 ~ 오후 9시',
    way: '온라인 부트캠프',
    img: campImg
  },
  'kangwon': {
    name: '이노베이션 in 강원',
    date: '2022.08.01 ~ 2022.11.04',
    time: '월~토(공휴일 제외) 오전 9시 ~ 오후 9시',
    way: '온라인 부트캠프',
    img: campImg
  },
  'hanghae99_9': {
    name: '항해99 9기',
    date: '2022.09.19 ~ 2022.12.23',
    time: '월~토(공휴일 제외) 오전 9시 ~ 오후 9시',
    way: '온라인 부트캠프',
    img: campImg
  },
  'hanghae99_10': {
    name: '항해99 10기',
    date: '2022.11.07 ~ 2023.02.10',
    time: '월~토(공휴일 제외) 오전 9시 ~ 오후 9시',
    way: '온라인 부트캠프',
    img: campImg
  }
}

export function loadCampList(campList){
  return {type: LOAD, campList}
}
export function createCampList(camp_data){
  return {type: CREATE, camp_data}
}
export function removeCampList(camp_id){
  return {type: REMOVE, camp_id}
}

const campReducer = (state = initialState, action = {}) => {
  switch(action.type){
    case LOAD:{
      return {...state, campList: action.campList}
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