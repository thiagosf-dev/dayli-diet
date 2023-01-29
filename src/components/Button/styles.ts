import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonBgColorProps = string

type ContainerProps = {
  bgColor: ButtonBgColorProps
}

export const Container = styled(TouchableOpacity) <ContainerProps>`
  align-items: center;
  border-radius: 6px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  margin-top: 8px;
  max-height: 50px;
  max-width: 327px;
  min-height: 50px;
  min-width: 327px;
  padding: 16px 24px;
  ${({ theme, bgColor }) => css`
    background-color: ${bgColor || theme.COLORS.GRAY_200};
    border: ${bgColor ? `1px solid ${theme.COLORS.GRAY_100}` : 'none'};
  `}
`

export const Title = styled.Text<ContainerProps>`
  height: 18px;
  text-align: center;
  ${({ theme, bgColor }) => css`
    color: ${bgColor ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`

export const Icon = styled.View`
  margin-right: 12px;
`
