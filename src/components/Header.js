import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderComp>
      헤더입니다.
    </HeaderComp>
  );
}

const HeaderComp = styled.header`
  width: 100vw;
  height: 6vh;
  background: #E3344D;
`

export default Header;