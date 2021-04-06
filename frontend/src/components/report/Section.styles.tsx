import styled from 'styled-components';
import { ListItem, ListItemProps } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      width: '100%',
      height: '100%',
    },
    cardContent: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    date: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      margin: '8px 0',
    },
    divider: {
      background: '#858090',
    },
    formControlA: {
      width: '25%',
      minWidth: 120,
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginBottom: '3rem',
      },
    },
    formControlB: {
      width: '25%',
      minWidth: 120,
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        marginBottom: '1rem',
      },
    },
    grid: {
      padding: '1rem',
      marginBottom: '1rem',
    },
    card_grid: {
      padding: '0.5rem',
    },
    top3Link: {
      height: '100%',
    },
    top10Link: {
      minHeight: '56px',
      color: '#e2e3e6',
    },
    select: {
      backgroundColor: '#f2f3f6',
    },
  }),
);

export const Top10Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  span:nth-child(1) {
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.text.second};
    margin: 8px 0;
    &:hover {
      color: ${({ theme }) => theme.colors.text.first};
      transition: 0.2s all;
    }
  }
  span:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.text.third};
  }
`;

export const Top10Counts = styled.div`
  width: 64px;
  height: 40px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.mint};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  span {
    color: white;
  }
  span:nth-child(1) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
  span:nth-child(2) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const RateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

export const RateInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    span:nth-child(1) {
      font-size: ${({ theme }) => theme.fontSizes.xs};
      margin-bottom: 4px;
    }
    span:nth-child(2) {
      font-size: ${({ theme }) => theme.fontSizes.xl};
      margin-bottom: 8px;
    }
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text.first};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin: 8px 0;
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.text.second};
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-bottom: 1rem;
`;

export function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}
