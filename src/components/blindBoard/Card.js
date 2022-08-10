import styled, { css } from "styled-components";

const Card = (props) => {
  const { type } = props;

  return <Box type={type}>{props.children}</Box>;
};
Card.defaultProps = {
  type: "nav",
};
export default Card;

//styled-component
const Box = styled.button`
  background-color: white;
  border-color: red;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.type === "nav" &&
    css`
      width: 200px;
      height: 100px;
    `}
  white-space:nowrap;
  p {
    cursor: pointer;
  }
`;
