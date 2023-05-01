import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {},
  typography: {
    fontWeightRegular: 600,
  },
});

export type ThemeType = typeof theme;
