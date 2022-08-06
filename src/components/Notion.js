import React from 'react';
import styled from 'styled-components';
import InputComment from './InputComment';

function Notion() {
  return (
    <NotionComp>
      <div>
        <h3>이노베이션 in 동작은 좋아요</h3>
        <button>추천 수 : 32</button>
      </div>
      <p>
        현재 4주차인데 너무너무 좋아요. 즐겁고 행복해요. 
        현재 4주차인데 너무너무 좋아요. 즐겁고 행복해요.
        현재 4주차인데 너무너무 좋아요. 즐겁고 행복해요.
      </p>
      <ul>
        <li>저도 너무너무 동감해요</li>
        <li>그렇군요!</li>
        <li>피땀눈물 주륵주륵!</li>
      </ul>
      <InputComment />
    </NotionComp>
  );
}
const NotionComp = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  padding: 30px;
  & div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & div > button{
    height: 30px;
  }
  & ul{
    list-style-type: none;
  }
`


export default Notion;