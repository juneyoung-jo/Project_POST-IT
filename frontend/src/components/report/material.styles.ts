import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    listitemlink: {
      height: '56px',
      color: '#e2e3e6',
    },
    select: {
      backgroundColor: '#f2f3f6',
    },
  }),
);
