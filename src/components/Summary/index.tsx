import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { calculateStatistics, StatisticsInfoType } from '@utils/CalculateStatistics'
import { useCallback, useState } from 'react'
import * as S from './styles'

export function Summary() {
  const navigation = useNavigation()

  const [statistic, setStatistic] = useState<StatisticsInfoType>({} as StatisticsInfoType)

  function handleStatisticsNavigate() {
    navigation.navigate('statistics')
  }

  function calculateIsPositiveDiet() {
    return statistic.percetIncomeFood >= 50 || false
  }

  const calculate = useCallback(() => {
    calculateStatistics()
      .then(value => setStatistic(value as StatisticsInfoType))
      .catch(console.error)
  }, [])

  useFocusEffect(() => {
    calculate()
  })

  return (
    <S.Container isPositiveDiet={calculateIsPositiveDiet()}>
      <S.Title>
        {`${Number(statistic?.percetIncomeFood).toPrecision(4)}%`}
      </S.Title>

      <S.SubTitle>
        das refeições dentro da dieta
      </S.SubTitle>

      <S.DetailButton onPress={handleStatisticsNavigate} >
        <S.Icon />
      </S.DetailButton>
    </S.Container>
  )
}
