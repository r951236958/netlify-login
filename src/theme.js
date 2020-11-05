import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffeb3b',
    },
    secondary: {
      main: '#ec407a',
    },
    error: {
      main: red.A400,
    },
    bk: {
      main: '#272c34',
    },
    type: 'dark',
  },
});

export default theme;
