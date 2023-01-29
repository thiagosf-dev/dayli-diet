import { Divider } from '@components/Divider'
import { FoodModel } from '@storage/food/FoodModel'
import * as S from './styles'

type CardFoodProps = {
  food: FoodModel
  status?: S.StyleStatusProps
  handleOnPress?: () => void
}

export const FoodCard = ({
  food,
  handleOnPress,
  status = 'NONE'
}: CardFoodProps) => {
  return (
    <S.Container onPress={handleOnPress}>
      <S.Informations>
        <S.Hour>{food?.hour}</S.Hour>
        <Divider />
        <S.Food>{food?.name}</S.Food>
      </S.Informations>
      <S.Status status={status} />
    </S.Container>
  )
}
