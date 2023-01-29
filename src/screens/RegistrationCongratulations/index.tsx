import InsideDietaImage from '@assets/inside-dieta-image.png'
import { useNavigation } from '@react-navigation/native'
import * as S from './styles'

export const RegistrationCongratulations = () => {
  const navigation = useNavigation()

  function handleHomeNavigate() {
    navigation.navigate('home')
  }

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

      <S.Button onPress={handleHomeNavigate}>
        <S.ButtonText>
          {"Ir para a página inicial"}
        </S.ButtonText>
      </S.Button>
    </S.Container>
  )
}
