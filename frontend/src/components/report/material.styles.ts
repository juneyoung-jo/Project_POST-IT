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
