import { StatisticsCard } from '@components/StatisticsCard'
import { StatisticsMiniCard } from '@components/StatisticsMiniCard'
import { useNavigation } from '@react-navigation/native'
import { foodSequenceInfoGet } from '@storage/food/foodSequenceInfoGet'
import { SequenceModel } from '@storage/food/SequenceModel'
import { calculateStatistics, StatisticsInfoType } from '@utils/CalculateStatistics'
import { useCallback, useEffect, useState } from 'react'
import { useTheme } from 'styled-components/native'
import * as S from './styles'

export const Statistics = () => {
  const navigation = useNavigation()
  const { COLORS } = useTheme()
  const [statisticInfo, setStatisticInfo] = useState<StatisticsInfoType>({} as StatisticsInfoType)
  const [sequenceInfo, setSequenceInfo] = useState<SequenceModel>({} as SequenceModel)

  function handleHomeNavigate() {
    navigation.navigate('home')
  }

  const calculate = useCallback(async () => {
    calculateStatistics()
      .then(value => setStatisticInfo(value as StatisticsInfoType))
      .catch(console.error)

    setSequenceInfo(await foodSequenceInfoGet())
  }, [])

  useEffect(() => {
    calculate()
  }, [])

  return (
    <S.Container isPositiveDiet={statisticInfo.isPositiveBalance}>
      <S.Content>
        <S.BackButton onPress={handleHomeNavigate}>
          <S.BackIcon
            color={statisticInfo.isPositiveBalance ?
              COLORS.GREEN_DARK :
              COLORS.RED_DARK
            }
          />
        </S.BackButton>
      </S.Content>

      <S.Header>
        <S.PercentText>{Number(statisticInfo.percetIncomeFood).toPrecision(4)}%</S.PercentText>
        <S.InfoText>{'das refeições dentro da dieta'}</S.InfoText>
      </S.Header>


      <S.GeneralStatistics>
        <S.StatisticsTitle>{'Estatísticas gerais'}</S.StatisticsTitle>

        <StatisticsCard
          subtitle={'melhor sequência de pratos dentro da dieta'}
          title={String(sequenceInfo.longestSequence)}
        />

        <StatisticsCard
          subtitle={'refeições registradas'}
          title={String(statisticInfo.amountFoods)}
        />

        <S.StatisticsGroup>
          <StatisticsMiniCard
            subtitle={`refeiç${statisticInfo.amountIncomeFood <= 1 ? 'ão' : 'ões'} dentro da dieta`}
            title={String(statisticInfo.amountIncomeFood)}
          />

          <StatisticsMiniCard
            subtitle={`refeiç${statisticInfo.amountOutcomeFood <= 1 ? 'ão' : 'ões'} fora da dieta`}
            title={String(statisticInfo.amountOutcomeFood)}
          />
        </S.StatisticsGroup>
      </S.GeneralStatistics>
    </S.Container >
  )
}
