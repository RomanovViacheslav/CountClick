import React from 'react';
import { StyledButton } from './Button.styled';
import { CustomButtonProps } from './Button.types';

export const Button = ({ buttonText, ...props }: CustomButtonProps) => (
  <StyledButton variant="contained" {...props}>
    {buttonText}
  </StyledButton>
);
