import { ArrowUpward } from '@material-ui/icons';
import NavigationIcon from '@material-ui/icons/Navigation';
import { Console } from 'node:console';
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
  const root = document.getElementById('root');
  const [hide, setHide] = useState(false);
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  // scrollY가 750을 넘을 경우 hide값을 true로 변경
  const scrollListener = () => {
    const hide = scrollY > 750;
    setHide(hide);
  };

  // 스크롤 위치 변동 시 scrollListener 함수 실행
  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
  });

  return (
    // hide가 true일 때만 버튼 보여주게 설정
    <Button className={hide ? 'display' : 'hide'} onClick={handleClick}>
      <ArrowUpward />
    </Button>
  );
}

export default TopButton;
