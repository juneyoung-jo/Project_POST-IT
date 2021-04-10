import { ArrowUpward } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 40px;
  height: 40px;
  z-index: 101;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 2rem;
  bottom: 3rem;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.3);
  border: 2px solid #a9a9a9;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.second};
  &:hover {
    & svg {
      color: white;
      transition: 0.1s all ease-in;
    }
    border: 2px solid white;
  }
  & svg {
    color: #a9a9a9;
  }
  &.hide {
    display: none;
  }
  &.display {
    display: flex;
  }
`;

function TopButton() {
  const [hide, setHide] = useState(false);

  // 스크롤 위치 변동 시 scrollListener 함수 실행
  useEffect(() => {
    // scrollY가 750을 넘을 경우 hide값을 true로 변경
    window.addEventListener('scroll', () => {
      setHide(scrollY > 750);
    });
    return () => {};
  }, []);

  return (
    // hide가 true일 때만 버튼 보여주게 설정
    <Button
      className={hide ? 'display' : 'hide'}
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}
    >
      <ArrowUpward />
    </Button>
  );
}

export default TopButton;
