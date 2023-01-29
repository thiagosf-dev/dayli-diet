import { TextInput, View } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`

export const Label = styled.Text`
  line-height: 18px;
  margin-bottom: 4px;
  ${({ theme }) => css`
  color: ${theme.COLORS.GRAY_200};
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.SM}px;
  `}
`

export const Input = styled(TextInput)`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  margin-bottom: 24px;
  max-width: 100%;
  min-height: 24px;
  padding: 14px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`
