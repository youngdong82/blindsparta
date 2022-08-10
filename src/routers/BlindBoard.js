import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Notion from '../components/blindBoard/Notion';
import styled from 'styled-components'
import Navbar from '../components/blindBoard/Navbar'
//redux
import {useSelector, useDispatch} from 'react-redux';
import {loadCampFB} from '../y_redux/modules/campReducer';
import {loadNotionFB, createNotionFB} from '../y_redux/modules/notionReducer';
//temp
import campImg from '../asset/camp_img.png';

function BlindBoard() {
  // 기본 렌더링 데이터 가져오기
  const {pathname} = useLocation();
  const campName = pathname.split('/')[1]
  const [nowWeek, setNowWeek] = useState('week_1');
  // 기본적인 데이터 세팅, firebase에서 redux state로 설정하고 가져오기.
  const dispatch = useDispatch();
  const notionList = useSelector((state) => state.notionReducer.notionList);
  const campData = useSelector((state) => state.campReducer.campData);

  useEffect(() => {
    dispatch(loadCampFB(campName));
    dispatch(loadNotionFB(campName, nowWeek));
  },[nowWeek])
  //주차 변경
  const switchWeek = (e) => {
    const week_id = e.target.dataset?.id;
    if(week_id === undefined){
      alert('switchweek에서 에러')
      return
    }
    setNowWeek(week_id);
  }

  //노션 작성 관련
  const notion_title = useRef();
  const notion_description = useRef();
  const submitNotion = () => {
    const notionTitleValue = notion_title.current.value;
    const notionDescriptionValue = notion_description.current.value;

    const newNowData = {
      camp_name: campName,
      week: nowWeek,
      user_id: 'youngdong4', 
      title: notionTitleValue, 
      description: notionDescriptionValue, 
      like: 0,
    };

    dispatch(createNotionFB(newNowData))

    notion_title.current.value = "";
    notion_description.current.value = "";
  };
  return (
    <CampComp>
    <Navbar />
    <BlindBoardComp>
      <CampInfoComp>
        <article className='campInfo'>
          {campData !== null ? 
          <>
            <img src={campImg} alt='이노베이션 이미지' />
            <h3>{campData.name}</h3>
            <div> 캠프 기간 : {campData.date}</div>
            <div> 훈련 시간 : {campData.time}</div>
            <div> 훈련 방식 : {campData.way}</div>
          </>
          : <></>}
        </article>
        <article className='weekContainer'onClick={switchWeek}>
          <div data-id='week_1'>1주차</div>
          <div data-id='week_2'>2주차</div>
          <div data-id='week_3'>3주차</div>
          <div data-id='week_4'>4주차</div>
          <div data-id='week_5'>5주차</div>
          <div data-id='week_6'>6주차</div>
          <div data-id='week_7'>7주차</div>
          <div data-id='week_8'>8주차</div>
          <div data-id='week_9'>9주차</div>
          <div data-id='week_10'>10주차</div>
          <div data-id='week_11'>11주차</div>
          <div data-id='week_12'>12주차</div>
          <div data-id='week_13'>13주차</div>
          <div data-id='week_14'>14주차</div>
        </article>
      </CampInfoComp>
      <NotionContainerComp>
        <NotionContainer>
          {notionList !== null && notionList.length !== 0 ? 
          notionList.map((eachNotion) => {
            return(
              <Notion key={eachNotion.id} data={eachNotion}/>
            )
          })
          : <></>}
        </NotionContainer>
        <NotionInput>
          <label>더 하고 싶은 말이 있나요?</label>
          <input ref={notion_title} type='text' placeholder='글 제목을 적어주세요'/>
          <input ref={notion_description} type='text' placeholder='글 내용을 적어주세요' />
          <button onClick={submitNotion}>작성하기</button>
        </NotionInput>
      </NotionContainerComp>
    </BlindBoardComp>
    </CampComp>
  );
}
const CampComp = styled.div`
  display: flex;
`;
const BlindBoardComp = styled.main`
  width: 80vw;
  height: 84vh;
  display: flex;
  overflow: hidden;
`;
const CampInfoComp = styled.section`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  & .campInfo {
    height: 50%;
  }
  & .campInfo > img {
    width: 100%;
    height: 50%;
  }

  & .weekContainer {
    height: 50%;
    overflow-y: scroll;
  }
  & .weekContainer > div {
    width: 100%;
    height: 40px;
    text-align: center;
    cursor: pointer;
  }
`;
const NotionContainerComp = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const NotionContainer = styled.div`
  width: 100%;
  height: 85%;
  overflow-y: scroll;
`;
const NotionInput = styled.article`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
`;

export default BlindBoard;
