import { createMuiTheme } from '@material-ui/core';

// overrides and typography will eventually also be here
const theme = createMuiTheme({
  palette: {},
  typography: {
    fontFamily: ['Open Sans', 'Noto Sans KR', 'Roboto'].join(','),
  },
});

export default theme;
