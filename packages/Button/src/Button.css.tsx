import styled, { ThemedStyledFunctionBase } from 'styled-components';

export const ButtonSt: ThemedStyledFunctionBase<
  'button',
  st,
  any,
  any
> = styled.button`
  background-color: ${({ theme }) => theme.background.font};
  color: ${({ theme }) => theme.color.font};
`;
