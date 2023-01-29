import styled, { css } from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  flex: 1;
  justify-content: center;
`

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_MID,
  size: 75
}),)``

export const LoadingText = styled.Text`
  margin-top: 32px;
  font-style: italic;
  ${({ theme }) => css`
    color: ${theme.COLORS.GREEN_DARK};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`
