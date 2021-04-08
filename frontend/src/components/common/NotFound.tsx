import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  & > div {
    margin: 3rem 3rem;
    h1 {
      color: ${({ theme }) => theme.colors.text.first};
      font-size: ${({ theme }) => theme.fontSizes.title};
      font-weight: 700;
    }
    p {
      padding-top: 1rem;
      color: ${({ theme }) => theme.colors.text.second};
    }
  }
`;

function NotFound() {
  return (
    <Wrapper>
      <div>
        <h1>404 Page NotFound</h1>
        <p>존재하지 않는 페이지에요.</p>
      </div>
    </Wrapper>
  );
}

export default NotFound;
