import styled, { css } from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 6px;
  justify-content: space-around;
  margin-bottom: 12px;
  padding: 16px;
  max-width: 327px;
  width: 327px;
`

export const Title = styled.Text`
  height: 31px;
  margin-bottom: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`

export const SubTitle = styled.Text`
  height: 18px;
  flex-wrap: wrap;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
