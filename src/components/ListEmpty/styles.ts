import styled, { css } from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`

export const Message = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
  text-align: center;
`
