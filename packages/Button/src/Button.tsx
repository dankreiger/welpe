import React from 'react';
import { IButtonProps } from './Button.types';
import { ButtonSt } from './Button.css';
/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<IButtonProps> = ({
  label,
  primary = false,
  onClick = () => {},
}) => {
  return (
    <ButtonSt primary={primary} onClick={onClick}>
      {label}
    </ButtonSt>
  );
};
