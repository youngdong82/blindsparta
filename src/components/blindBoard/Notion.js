import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {loadCommentFB, createCommentFB} from '../../y_redux/modules/commentReducer';
import { removeNotionFB } from '../../y_redux/modules/notionReducer';

function Notion({data, userData}) {
  // redux 연결
  const dispatch = useDispatch();
  const comments_redux = useSelector((state) => state.commentReducer.commentList);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    dispatch(loadCommentFB());
  },[])

  useEffect(() => {
    if(comments_redux.length !== 0){
      const thisComments = comments_redux.filter((eachComment) => {
        if(data.id === eachComment.notion_id){
          return true;
        }else{
          return false;
        }
      });
      setComments(thisComments);
    }
  },[comments_redux]);

  //comment 작성 관련
  const comment_comment = useRef();
  const submitComment = () => {
    const commentValue = comment_comment.current.value;

    const newComment = {
      user_id: data.user_id,
      notion_id: data.id,
      comment: commentValue,
    };
    dispatch(createCommentFB(newComment));
    comment_comment.current.value = '';
  }

  //추천 누르기 관련
  const [like, setLike] = useState(false)
  const toggleLike = () => {
    setLike(!like)
  }
  const removeNotion = (e) => {
    const notion = e.target.closest('article');
    const notion_id = notion.dataset.id
    dispatch(removeNotionFB(notion_id))
  }
  return (
    <NotionComp data-id={data.id}>
      <div>
          <h3>{data.title}</h3>
          <span>작성자: {data.user_id}</span>
          <button onClick={toggleLike}>추천 수 : {data.like + like}</button>
          {userData && userData === data.user_id ? 
          <button onClick={removeNotion}>x</button>
          :
          <></>
          }
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