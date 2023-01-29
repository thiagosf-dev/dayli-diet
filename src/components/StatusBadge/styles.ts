import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 144px;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 1000px;
  border: none;
  padding: 8px 16px;
`

type StatusProps = {
  isIncomeDiet: boolean
}

export const Status = styled.View<StatusProps>`
  background-color: ${({ theme, isIncomeDiet }) => isIncomeDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 8px;
  height: 8px;
  margin-right: 8px;
  width: 8px;
`

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
