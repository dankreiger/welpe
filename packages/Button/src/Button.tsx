import React from 'react';
import { IButtonProps } from './Button.types';
import { ButtonSt } from './Button.css';
/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<IButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  return <ButtonSt type="button">{label}</ButtonSt>;
};
