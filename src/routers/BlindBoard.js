import React from 'react';
import Notion from '../components/Notion';
import styled from 'styled-components'
import Navbar from '../components/ui/Navbar'

function BlindBoard() {
  return (
    <>
    <Navbar />
    <BlindBoardComp>
      <ProjectInfoComp>
        <article>
          <img alt='이노베이션 이미지' />
          <h5>이노베이션 인 동작</h5>
          <div> 기간 : 2022.07 ~ 2022.10</div>
        </article>
        <article>
          <div>1주차</div>
          <div>2주차</div>
          <div>3주차</div>
          <div>4주차</div>
        </article>
      </ProjectInfoComp>
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
    </>
  );
}
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