import { ArrowLeft } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native';
import styled, { css } from "styled-components/native";

export type StyleTypesProps = 'INSIDE' | 'OUTSIDE'

type ContainerProps = {
  type: StyleTypesProps
}

export const Container = styled(SafeAreaView) <ContainerProps>`
  flex-direction: column;
  width: 327px;
`

// export const BackButton = styled.TouchableOpacity`
//   position: absolute;
//   height: 50px;
//   width: 50px;
// `

export const BackButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`

// export const BackIcon = styled(ArrowLeft).attrs
//   (({ theme }) => ({ size: 24, }),)``

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
}),)``

export const Title = styled.Text`
  height: 24px;
  margin: 0 auto;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`
