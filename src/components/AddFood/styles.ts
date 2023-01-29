import styled, { css } from "styled-components/native";

export const Container = styled.View`
  height: 79px;
  margin-top: 40px;
  width: 327px;
  margin-bottom: 40px;
`

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`
