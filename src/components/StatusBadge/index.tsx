import * as S from './styles'

type Props = {
  status: boolean
}

export const StatusBadge = ({
  status = false
}: Props) => {
  return (
    <S.Container>
      <S.Status isIncomeDiet={status} />
      <S.Text>
        {
          status ?
            'dentro da dieta' :
            'fora da dieta'
        }
      </S.Text>
    </S.Container>
  )
}
