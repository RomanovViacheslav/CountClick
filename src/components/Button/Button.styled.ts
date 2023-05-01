import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)({
  width: '100%',
  background: 'orange',
  color: 'black',
  fontWeight: 600,
  '&:hover': {
    background: 'darkorange',
  },
  '&:active': {
    background: 'orange',
  },
});
