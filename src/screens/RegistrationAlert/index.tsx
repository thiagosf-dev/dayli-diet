import OutsideDietaImage from '@assets/outside-dieta-image.png'
import { useNavigation } from '@react-navigation/native'
import * as S from './styles'

export const RegistrationAlert = () => {
  const navigation = useNavigation()

  function handleHomeNavigate() {
    navigation.navigate('home')
  }

  return (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>
          Que pena!
        </S.HeaderTitle>

        <S.HeaderSubtitle>
          Você
          <S.Highlight>{' '}saiu da dieta</S.Highlight>
          dessa vez, mas continue se esforçando e não desista!
        </S.HeaderSubtitle>
      </S.Header>

      <S.Image source={OutsideDietaImage} />

      <S.Button onPress={handleHomeNavigate}>
        <S.ButtonText>
          {"Ir para a página inicial"}
        </S.ButtonText>
      </S.Button>
    </S.Container>
  )
}
