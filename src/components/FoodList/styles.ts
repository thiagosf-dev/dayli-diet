import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 327px;
  /* margin-top: 32px; */
`

export const Date = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`
