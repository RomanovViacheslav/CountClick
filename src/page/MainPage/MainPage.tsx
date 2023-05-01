import React from 'react';
import { Typography } from '@mui/material';
import { ClickCounter } from '../../modules';

export const MainPage = () => (
  <>
    <Typography variant="h4" component="h1" mb="20px">
      Counting clicks
    </Typography>
    <ClickCounter />
  </>
);
