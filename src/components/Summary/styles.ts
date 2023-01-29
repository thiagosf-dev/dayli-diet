import { ArrowUpRight } from 'phosphor-react-native';
import { View } from 'react-native';
import styled, { css } from "styled-components/native";

export type StaticsStyleProps = {
  isPositiveDiet: boolean
}

export const Container = styled(View) <StaticsStyleProps>`
  background-color: ${({ theme, isPositiveDiet }) => isPositiveDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  height: 102px;
  width: 327px;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  ${({ theme }) => css`
  color: ${theme.COLORS.GRAY_100};
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.XXL}px;
  `}
`

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`

export const DetailButton = styled.TouchableOpacity`
  /* flex: 1; */
  position: absolute;
  right: 8px;
  top: 8px;
`

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
  size: 24,
}))``
