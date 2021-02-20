import styled from 'styled-components';
import type { Theme } from '@welpe/theme';
import { IButtonStProps } from './Button.types';

const getBackgroundColor = ({
  theme: { colors },
  primary,
}: IButtonStProps): string =>
  colors[primary ? 'secondary' : 'primary'] as string;

const getColor = (prop: keyof Theme['colors']) => ({
  theme: { colors },
}: IButtonStProps): string => colors[prop];

export const ButtonSt = styled.button<IButtonStProps>`
  background-color: ${getBackgroundColor};
  color: ${getColor('copy')};
`;
