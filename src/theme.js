import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

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
    type: 'dark',
  },
});

export default theme;
