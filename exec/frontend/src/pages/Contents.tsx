import { useState } from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import Blog from 'components/daily/Blog';
import Youtube from 'components/daily/Youtube';
import { activeState } from 'index';
import { useRecoilState } from 'recoil';

//랩퍼
const Wrapper = styled.div`
  top: 0;
  position: static;
  margin: 1rem auto;
  display: block;
  width: 100%;
  height: 100%;
  font-family: 'Circular Std', 'Noto Sans', 'Open Sans', sans-serif;
  img {
    max-height: 250px;
    object-fit: contain;
  }
`;

// 상단 탭
const Tab = styled.div`
  display: flex;
  margin-top: 90px;
  margin-bottom: 80px;
`;
// 버튼 디자인
const MyButton = styled.button`
  font-family: 'Circular Std', 'Noto Sans', 'Open Sans', sans-serif;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.text.first};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: bold;
`;

// Base title
const Bar = styled.p`
  display: flex;
  align-items: center;
  margin: 0 1rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.third};
`;

function Contents() {
  // const [active, setActivate] = useState();
  const [active, setActive] = useRecoilState(activeState);
  const [isBlog, setBlog] = useState(true);
  const [isYoutube, setYoutube] = useState(false);
  const [isJob, setJob] = useState(false);
  const clickHandler = (v: boolean) => {
    if (v) {
      setBlog(true);
      setYoutube(false);
      setJob(false);
    } else if (!v) {
      setBlog(false);
      setYoutube(true);
      setJob(false);
    }

    setActive(v);
  };
  return (
    <Wrapper>
      <Container>
        <Tab>
          <MyButton
            onClick={() => clickHandler(false)}
            style={{ filter: !active ? 'brightness(1.5)' : 'brightness(0.75)' }}
          >
            개발 블로그
          </MyButton>
          <Bar> | </Bar>
          <MyButton
            onClick={() => clickHandler(true)}
            style={{
              filter: active ? 'brightness(1.5)' : 'brightness(0.75)',
            }}
          >
            유튜브 동영상
          </MyButton>
        </Tab>
        {(function () {
          if (!active)
            return (
              <div>
                {/* <Title>최신 블로그 게시물</Title> */}
                <Blog></Blog>
              </div>
            );
          if (active) return <Youtube></Youtube>;
        })()}
      </Container>
    </Wrapper>
  );
}

export default Contents;
