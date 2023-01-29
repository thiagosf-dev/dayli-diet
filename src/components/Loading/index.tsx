import { Text } from 'react-native'
import * as S from './styles'

export const Loading = () => {
  return (
    <S.Container>
      <S.LoadingIndicator />
      <S.LoadingText>
        🏃🏃‍♂️🏃‍♀️ Carregando...aguarde!
      </S.LoadingText>
    </S.Container>
  )
}
