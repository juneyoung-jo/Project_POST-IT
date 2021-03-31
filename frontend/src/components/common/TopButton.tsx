import NavigationIcon from '@material-ui/icons/Navigation';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      backGround: '#ffffff',
    },
  }),
);

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
  border: 2px solid rgba(65, 65, 65, 0.5);
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.second};
  &:hover {
    & svg {
      color: ${({ theme }) => theme.colors.mint};
      transition: 0.1s all ease-in;
    }
  }
  & svg {
    color: ${({ theme }) => theme.colors.text.first};
  }
`;

function TopButton() {
  const classes = useStyle();
  const root = document.getElementById('root');

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <Button onClick={handleClick}>
      <NavigationIcon />
    </Button>
  );
}

export default TopButton;
