import { createMuiTheme } from '@material-ui/core';

// overrides and typography will eventually also be here
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7fdbda',
      light: '#ade498',
      dark: '#251f44',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffe0f7',
      light: '#fe91ca',
      dark: '#d3dbff',
      contrastText: '#fff',
    },
  },
});

export default theme;
