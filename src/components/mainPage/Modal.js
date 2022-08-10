import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createCamp, createCampFB } from "../../y_redux/modules/redux";
const Modal = ({ toggle }) => {
  const dispatch = useDispatch();

  const [id, setId] = useState();
  const [name, setName] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    const inputId = e.target[0].value;
    const inputName = e.target[1].value;
    if (inputId.trim() === "") {
      e.target[0].focus();
      return;
    }
    if (inputName.trim() === "") {
      e.target[1].focus();
      return;
    }
    if (inputId.trim() !== "" && inputName.trim() !== "") {
      setId(inputId);
      setName(inputName);
      toggle(false);

      dispatch(
        createCampFB({
          camp_name: inputId,
          date: "2022.08.01~2022.11.04",
          name: inputName,
          time: "월~토(공휴일 제외)오전9시~오후9시",
          way: "온라인 부트캠프",
        })
      );
    }
  };

  return (
    <>
      <Backdrop onClick={() => toggle(false)}></Backdrop>
      <FormBox>
        <form onSubmit={submitHandler}>
          <div>캠프 추가하기</div>
          <br></br>

          <input placeholder="캠프지역"></input>
          <input placeholder="캠프이름"></input>

          <button>추가하기</button>
        </form>
      </FormBox>
    </>
  );
};


// const comment_comment = useRef();
//   const submitComment = () => {
//     const commentValue = comment_comment.current.value;

//     const newComment = {
//       user_id: data.user_id,
//       notion_id: data.id,
//       comment: commentValue,
//     };
//     dispatch(createCommentFB(newComment));
//     comment_comment.current.value = '';



export default Modal;
const Wrapper = styled.div`
  position: relative;
`;
const Backdrop = styled.div`
  margin: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  margin-top: 10px;
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 100;
  min-width: 40vw;
  min-height: 80vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  form {
    min-width: 400px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input {
    width: 300px;
    height: 50px;
    margin-bottom: 20px;
  }
  button {
    background-color: white;
    margin-top: 20px;
    width: 150px;
    height: 30px;
  }
  button:hover {
    background-color: rgb(204, 225, 243);
  }
`;
