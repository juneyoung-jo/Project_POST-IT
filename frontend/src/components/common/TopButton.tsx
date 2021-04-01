import { ArrowUpward } from '@material-ui/icons';
import NavigationIcon from '@material-ui/icons/Navigation';
import styled from 'styled-components';

const Button = styled.button`
  width: 40px;
  height: 40px;
  z-index: 101;
  display: flex;
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
`;

function TopButton() {
  const root = document.getElementById('root');

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <Button onClick={handleClick}>
      <ArrowUpward />
    </Button>
  );
}

export default TopButton;
