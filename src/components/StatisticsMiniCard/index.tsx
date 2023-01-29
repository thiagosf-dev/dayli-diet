import * as S from './styles'

type Props = {
  subtitle: string
  title: string
}

export const StatisticsMiniCard = ({
  subtitle,
  title,
}: Props) => {
  return (
    <S.Container>
      <S.Title> {title} </S.Title>
      <S.SubTitle> {subtitle} </S.SubTitle>
    </S.Container>
  )
}
