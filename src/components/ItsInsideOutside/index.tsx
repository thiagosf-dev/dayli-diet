import * as S from './styles'

type Props = {
  label: string
  handleOnPress?: () => void
  option?: S.ViewItsInsideOutsideOptions | undefined
  type?: S.StatusColorStyleType
}

export const ItsInsideOutside = ({
  label = '',
  handleOnPress,
  option = undefined,
  type,
}: Props) => {
  return (
    <S.Container
      onPress={handleOnPress}
      option={option}
    >
      <S.StatusColor type={type} />
      <S.Label> {label} </S.Label>
    </S.Container>
  )
}
