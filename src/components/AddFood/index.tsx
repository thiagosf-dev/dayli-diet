import { Plus } from 'phosphor-react-native'
import * as S from './styles'

import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'

export const AddFood = () => {
  const navigation = useNavigation()

  const { COLORS } = useTheme()

  function handleFormAddFoodNavigate() {
    navigation.navigate('formAddFood')
  }

  return (
    <S.Container>
      <S.Text>
        Refeições
      </S.Text>

      <Button
        onPressHandle={handleFormAddFoodNavigate}
        text={'Adicionar refeição'}
      >
        <Plus
          size={18}
          color={COLORS.WHITE}
        />
      </Button>
    </S.Container>
  )
}
