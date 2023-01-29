import * as S from './styles'

import { AddFood } from '@components/AddFood'
import { FoodList } from '@components/FoodList'
import { Header } from '@components/Header'
import { Summary } from '@components/Summary'
import { useState } from 'react'

export const Home = () => {
  const [refresh, setRefresh] = useState(false)

  return (
    <S.Container>
      <S.Content>
        <Header handleSetRefresh={setRefresh} />
        <Summary />
        <AddFood />
        <FoodList refresh={refresh} />
      </S.Content>
    </S.Container>
  )
}
