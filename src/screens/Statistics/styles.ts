import { StaticsStyleProps } from "@components/Summary/styles";
import { CaretLeft } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView) <StaticsStyleProps>`
  background-color: ${({ theme, isPositiveDiet }) => isPositiveDiet ?
    theme.COLORS.GREEN_LIGHT :
    theme.COLORS.RED_LIGHT
  };
  flex: 1;
`

export const Content = styled.View`
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 24px;
  width: 327px;
`

export const BackButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 24,
}),)``

export const Header = styled.View`
  align-items: center;
  margin-bottom: 32px;
  text-align: center;
`

export const PercentText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `}
`

export const InfoText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`

export const GeneralStatistics = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  justify-content: flex-start;
  flex: 1;
  padding: 24px 24px 0 24px;
`

export const StatisticsTitle = styled.Text`
  height: 18px;
  margin-bottom: 23px;
  margin-top: 9px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`

export const StatisticsGroup = styled.View`
  flex-direction: row ;
  align-items: center;
  justify-content: space-between;
  width: 327px;
`
