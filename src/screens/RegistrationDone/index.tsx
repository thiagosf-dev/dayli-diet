import InsideDietaImage from '@assets/inside-dieta-image.png'
import { Button } from '@components/Button'
import { Text } from 'react-native'
import * as S from './styles'

export const RegistrationDone = () => {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>
          Continue assim!
        </S.HeaderTitle>

        <S.HeaderSubtitle>
          Você continua
          <S.Highlight>{' '}dentro da dieta</S.Highlight>
          . Muito bem!
        </S.HeaderSubtitle>
      </S.Header>

      <S.Image source={InsideDietaImage} />

      <S.Button>
        <S.ButtonText>
          {"Ir para a página inicial"}
        </S.ButtonText>
      </S.Button>
    </S.Container>
  )
}
