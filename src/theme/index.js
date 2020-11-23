import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontSize: 14,
  },
  palette: {
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#3EA6FF',
    },
    background: {
      default: colors.common.white,
      dark: '#F9F9F9',
      paper: colors.common.white,
    },
  },
});

export default theme;
