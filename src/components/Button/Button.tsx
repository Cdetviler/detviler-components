import React from 'react';
import { themeDefault } from '../Theme/themeDefault';
import { getVariant } from './Button.styles';
import { ButtonProps } from './Button.types';

const Button = ({
  variant = 'custom',
  size = 'md',
  children,
  onClick,
  disabled = false,
  theme = themeDefault,
}: ButtonProps) => {
  const StyledButtonComponent = getVariant(variant);
  console.log(variant);
  return (
    <StyledButtonComponent
      variant={variant}
      size={size}
      onClick={onClick}
      theme={theme}
      disabled={disabled}
    >
      {children}
    </StyledButtonComponent>
  );
};

export default Button;
