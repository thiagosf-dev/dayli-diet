import * as S from './styles'

type Props = {
  handleOnPress: () => void
  title: string
  type: S.StyleTypesProps
}

export const FoodHeader = ({
  handleOnPress,
  title = '',
  type = 'INSIDE'
}: Props) => {
  return (
    <S.Container type={type}>
      <S.BackButton onPress={handleOnPress} />
      <S.BackIcon />
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
