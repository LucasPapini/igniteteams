import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_400};
    padding: 24px;
    flex: 1;
  `}
`;
