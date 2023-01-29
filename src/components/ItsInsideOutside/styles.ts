import { TouchableOpacity, View } from 'react-native';
import styled, { css, DefaultTheme } from "styled-components/native";

export type ViewItsInsideOutsideOptions = 'YES' | 'NO' | undefined

type Props = {
  option?: ViewItsInsideOutsideOptions
}

function setBackGroundColor(theme: DefaultTheme, option: ViewItsInsideOutsideOptions) {
  if (option === 'YES') return theme.COLORS.GREEN_LIGHT
  if (option === 'NO') return theme.COLORS.RED_LIGHT
  return theme.COLORS.GRAY_600
}

function setBorderColor(theme: DefaultTheme, option: ViewItsInsideOutsideOptions) {
  if (option === 'YES') return theme.COLORS.GREEN_DARK
  if(option === 'NO') return theme.COLORS.RED_DARK
  return theme.COLORS.GRAY_600
}

export const Container = styled(TouchableOpacity) <Props>`
  align-items: center;
  background-color: ${({ theme, option }) => setBackGroundColor(theme, option)};
  border: ${({ theme, option }) => !option ? 'none' : `1px solid ${setBorderColor(theme, option)}`};
  border-radius: 6px;
  flex-direction: row;
  height: 50px;
  justify-content: center;
  width: 159.6px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

export type StatusColorStyleType = 'YES' | 'NO'

type StatusColorProps = {
  type?: ViewItsInsideOutsideOptions
}

export const StatusColor = styled.View<StatusColorProps>`
  border-radius: 8px;
  height: 8px;
  margin-right: 8px;
  width: 8px;
  background-color: ${({ theme, type }) => type === 'YES' ?
    theme.COLORS.GREEN_DARK :
    theme.COLORS.RED_DARK
  };
`
