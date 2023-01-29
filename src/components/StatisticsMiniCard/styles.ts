import styled, { css } from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 6px;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  max-width: 157.5px;
  padding: 16px;
`

export const Title = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`

export const SubTitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
