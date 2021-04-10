import styled from 'styled-components';

export const Wrapper = styled.header`
  font-family: 'Circular Std', 'Noto Sans KR', 'Open Sans', sans-serif;
  top: 0;
  display: flex;
  position: sticky;
  width: 100%;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.second};
  z-index: 100;
  .header-logo {
    margin: auto 1rem;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.text.first};
  }
  .header-menus {
    font-size: 15px;
    font-weight: 700;
    padding: 0 1rem;
    color: ${({ theme }) => theme.colors.text.third};
    &:hover {
      transition: all 0.1s ease-in-out;
      color: ${({ theme }) => theme.colors.text.first};
    }
  }
  .menu-button {
    display: none;
  }

  .hidden-menu {
    position: absolute;
    height: 0;
    & .wrapper {
      display: none;
    }
  }

  .hidden-menu.active {
    width: 100%;
    height: 100%;
    min-height: 250px;
    top: 48px;
    background: ${({ theme }) => theme.colors.second};
    border-top: 1px solid ${({ theme }) => theme.colors.text.third};
    border-bottom: 1px solid ${({ theme }) => theme.colors.text.third};
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    border-radius: 0 0 10px 10px;
    transition: 0.2s all ease;
    z-index: -100;
    & .wrapper {
      width: inherit;
      height: 100%;
      padding: 1.5rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      & li {
        width: 80%;
        height: 40px;
        display: flex;
        border-radius: 8px;
        justify-content: center;
        align-items: center;
        a {
          font-size: ${({ theme }) => theme.fontSizes.base};
          font-weight: bold;
          color: ${({ theme }) => theme.colors.text.second};
        }
        a:hover {
          color: ${({ theme }) => theme.colors.text.first};
        }
      }
      & li:hover {
        background: #201d29;
        transition: 0.3s all ease;
      }
      .logout {
        position: absolute;
        bottom: 4rem;
        right: 1rem;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .header-menus {
      display: none;
    }
    .menu-button {
      display: block;
    }
  }
  @media screen and (min-width: 599px) {
    .hidden-menu {
      display: none;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  font-family: 'Circular Std', 'Noto Sans KR', 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 16px;
  background: none;
  border: none;
  margin: auto 0.5rem;
  padding-top: 5px;
  color: ${({ theme }) => theme.colors.text.second};
  &:hover {
    color: ${({ theme }) => theme.colors.text.first};
    & > svg {
      fill: ${({ theme }) => theme.colors.text.first};
    }
  }
`;
