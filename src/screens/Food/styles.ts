import { ArrowLeft, CaretLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
  flex: 1;
`

export const Header = styled(SafeAreaView)`
  flex-direction: row;
  margin-bottom: 32px;
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 45px;
  width: 327px;
`

export const BackButton = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
`

export const BackIcon = styled(ArrowLeft).attrs
  (({ theme }) => ({ size: 24, }),)``


export const Title = styled.Text`
  height: 24px;
  margin: 0 auto;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`

export const InfoContainer = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  flex: 1;
  justify-content: flex-start;
  padding: 40px 40px 50px;
  width: 100%;
`

export const Data = styled.View`
  flex: 1;
`

export const DataGroup = styled.View`
  margin-bottom: 40px;
`

export const FoodLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`

export const DateLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`

export const Description = styled.Text`
  margin-top: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

export const ButtonsContainer = styled.View`
  flex-direction: column;
  align-items: center;
  width: 100%;
`
