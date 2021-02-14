import styled from 'styled-components';
import type { Theme } from '@welpe/theme';

const getColor = <C extends keyof Theme['colors']>(prop: C) => ({
  theme: { colors },
}: {
  theme: Theme;
}): Theme['colors'][C] => {
  console.log(colors);
  return colors[prop];
};

export const ButtonSt = styled.button`
  background-color: ${getColor('primary')};
  color: ${getColor('copy')};
`;
