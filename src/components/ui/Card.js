import styled, { css } from "styled-components";

const Box = styled.button`
  background-color: white;
  border-color: red;
  font-size: 20px;
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
const Card = (props) => {
  const { type, onclick } = props;
  return (
    <Box type={type} onClick={onclick}>
      <p>{props.children}</p>
    </Box>
  );
};
Card.defaultProps = {
  type: "nav",
};
export default Card;
