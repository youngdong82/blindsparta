import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Notion from '../components/Notion';
import styled from 'styled-components'
import Navbar from '../components/ui/Navbar'
//data
import DUMMY from '../dummyData/dummyNotion';
import DUMMY_CAMP_INFO from '../dummyData/dummyCamp';

function BlindBoard() {
  // 기본 렌더링 데이터 가져오기
  const {pathname} = useLocation();
  const campName = pathname.split('/')[1]
  const [nowCampData, setNowCampData] = useState(null);
  const [nowDataList, setNowDataList] = useState(null);
  // 기본적인 데이터 세팅
  useEffect(() => {
    setNowCampData(DUMMY_CAMP_INFO[campName])
    setNowDataList(DUMMY[campName]['week_1'])
  },[])

  useEffect(() => {
    if(nowDataList != null){
      console.log(nowDataList)
    }
  },[nowDataList])
  useEffect(() => {
    if(nowCampData != null){
      console.log(nowCampData)
    }
  },[nowCampData])

  return (
    <CampComp>
    <Navbar />
    <BlindBoardComp>
      <CampInfoComp>
        <article className='campInfo'>
          {nowCampData !== null ? 
          <>
            <img src={nowCampData.img} alt='이노베이션 이미지' />
            <h3>{nowCampData.name}</h3>
            <div> 캠프 기간 : {nowCampData.date}</div>
            <div> 훈련 시간 : {nowCampData.time}</div>
            <div> 훈련 방식 : {nowCampData.way}</div>
          </>
          : <></>}
        </article>
        <article>
          <div>1주차</div>
          <div>2주차</div>
          <div>3주차</div>
          <div>4주차</div>
        </article>
      </CampInfoComp>
      <NotionContainerComp>
        <NotionContainer>
          <Notion />
          <Notion />
          <Notion />
        </NotionContainer>
        <NotionInput>
          <label>더 하고 싶은 말이 있나요?</label>
          <input type='text' />
          <button>작성하기</button>
        </NotionInput>
      </NotionContainerComp>
    </BlindBoardComp>
    </CampComp>
  );
}
const CampComp = styled.div`
  display: flex;
`
const BlindBoardComp = styled.main`
  width: 80vw;
  height: 84vh;
  display: flex;
  overflow: hidden;
  border: 1px solid black;
`
const ProjectInfoComp = styled.section`
  width: 30%;
  height: 100%;
  border: 1px solid black;
`
const NotionContainerComp = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const NotionContainer = styled.div`
  width: 100%;
  height: 85%;
  overflow-y: scroll;
`
const NotionInput = styled.article`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
`

export default BlindBoard;