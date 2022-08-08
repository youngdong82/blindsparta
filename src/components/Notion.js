import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import DUMMY_COMMENT from '../dummyData/dummyComment';

function Notion({data}) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const thisComments = DUMMY_COMMENT.filter((eachComment) => {
      if(data.id === eachComment.notion_id){
        return true;
      }else{
        return false;
      }
    });
    setComments(thisComments);
  },[])

  //comment 작성 관련
  const comment_comment = useRef();
  const submitComment = () => {
    const commentValue = comment_comment.current.value;

    const newComment = {
      id:8,
      user_id: data.user_id,
      notion_id: data.id,
      comment: commentValue,
    };
    const newComments = [...comments, newComment];
    setComments(newComments)

    comment_comment.current.value = '';
  }

  //추천 누르기 관련
  const [like, setLike] = useState(false)
  const toggleLike = () => {
    setLike(!like)
  }
  return (
    <NotionComp>
      <div>
          <h3>{data.title}</h3>
          <span>작성자: {data.id}</span>
          <button onClick={toggleLike}>추천 수 : {data.like + like}</button>
      </div>
      <p>{data.description}</p>
      <ul>
          {comments.length !== 0 ? 
            comments.map((eachComment) => {
              return(
                <li key={eachComment.id}>{eachComment.comment}</li>
              )
            }) : <></>
          }
      </ul>
      <div className="InputComment">
          <textarea ref={comment_comment} placeholder='댓글을 작성해주세요'/>
          <button onClick={submitComment}>등록</button>
    </div>
    </NotionComp>
  );
}
const NotionComp = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 30px;
  border: 1px solid black;
  border-radius: 0.4rem;
  & div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & div > button{
    height: 30px;
    cursor: pointer;
  }
  & ul{
    list-style-type: none;
  }
`


export default Notion;