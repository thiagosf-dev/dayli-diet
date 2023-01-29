import { SafeAreaView, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  flex: 1;
  justify-content: center;
`

export const Header = styled.View`
  align-items: center;
  justify-content: center;
`

export const HeaderTitle = styled.Text`
  height: 31px;
  margin-bottom: 8px;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GREEN_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`

export const HeaderSubtitle = styled.Text`
  width: 327px;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

export const Highlight = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

export const Image = styled.Image`
  height: 288px;
  margin-top: 40px;
  margin-bottom: 32px;
  width: 224px;
`

export const Button = styled(TouchableOpacity)`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  padding: 16px 24px;
`

export const ButtonText = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
