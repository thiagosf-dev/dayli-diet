import { Button } from '@components/Button'
import { StatusBadge } from '@components/StatusBadge'
import { useNavigation, useRoute } from '@react-navigation/native'
import { foodGetById } from '@storage/food/foodGetById'
import { FoodModel } from '@storage/food/FoodModel'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'
import { Alert } from 'react-native'
import { useTheme } from 'styled-components/native'
import * as S from './styles'

export const Food = () => {
  const { COLORS } = useTheme()
  const navigation = useNavigation()
  const route = useRoute()
  const food = route.params as FoodModel

  function handlFormAddFoodNavigate() {
    navigation.navigate('formAddFood', food)
  }

  function handlHomeNavigate() {
    navigation.navigate('home')
  }

  function handleRemoveFood() {
    Alert.alert(
      'Remover Refeição',
      'Deseja realmente excluir o registo dessa refeição?',
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: async () => await fetchFoodRemove() }
      ]
    )
  }

  async function fetchFoodRemove() {
    try {
      await foodGetById(food.id)
      navigation.navigate('home')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <S.Container>
      <S.Header>
        <S.BackButton onPress={handlHomeNavigate}>
          <S.BackIcon />
        </S.BackButton>

        <S.Title> {'Refeição'} </S.Title>
      </S.Header>

      <S.InfoContainer>
        <S.Data>
          <S.DataGroup>
            <S.FoodLabel>{food.name}</S.FoodLabel>
            <S.Description>{food.description}</S.Description>
          </S.DataGroup>

          <S.DataGroup>
            <S.DateLabel>Data e hora</S.DateLabel>
            <S.Description>{food.date} às {food.hour}</S.Description>
          </S.DataGroup>

          <StatusBadge status={food.status === 'YES'} />
        </S.Data>

        <S.ButtonsContainer>
          <Button
            showIcon text={'Editar refeição'}
            onPressHandle={handlFormAddFoodNavigate}
          >
            <PencilSimpleLine
              size={18}
              color={COLORS.WHITE}
            />
          </Button>

          <Button
            bgColor={COLORS.GRAY_700}
            onPressHandle={handleRemoveFood}
            showIcon text={'Excluir refeição'}
          >
            <Trash
              size={18}
              color={COLORS.GRAY_100}
            />
          </Button>
        </S.ButtonsContainer>
      </S.InfoContainer>
    </S.Container>
  )
}
