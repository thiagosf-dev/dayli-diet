
import { FoodCard } from '@components/FoodCard'
import { StyleStatusProps } from '@components/FoodCard/styles'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { FoodModel } from '@storage/food/FoodModel'
import { FoodModelByDate } from '@storage/food/FoodModelByDate'
import { foodsGetAll } from '@storage/food/foodsGetAll'
import { filterFoodByDate } from '@utils/FilterFoodsByDate'
import React, { useCallback, useEffect, useState } from 'react'
import { Alert } from 'react-native'
import * as S from './styles'

type Food = {
  food: string
  hour: string
  status: StyleStatusProps
}

type Meals = {
  date: string
  data: Food[]
}

type Props = {
  refresh: boolean
}

export const FoodList = ({ refresh }: Props) => {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(true)
  const [foodsByDate, setFoodsByDate] = useState<any>()

  function handleFoodNavigate(food: FoodModel) {
    navigation.navigate('food', food)
  }

  async function fetchFoods() {
    setIsLoading(true)
    try {
      const data = await foodsGetAll()
      const results = filterFoodByDate(data)
      let newFoods: FoodModelByDate[] = []
      Object.keys(results).forEach(key => {
        newFoods.push({
          date: key,
          foods: results[key] as FoodModel[]
        })
      })
      setFoodsByDate(newFoods)
    } catch (error) {
      Alert.alert(
        'Refeições',
        'Não foi possível carregar as refeições registradas!'
      )
      console.error(error);
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchFoods()
    }, [refresh])
  )

  useEffect(() => {
    fetchFoods()
  }, [refresh])

  return (
    <S.Container>
      {
        foodsByDate &&
        foodsByDate.length > 0 &&
        foodsByDate.map((date: FoodModelByDate, index: number) => (
          <>
            <S.Date key={Math.random() * index}>{date.date}</S.Date>
            {
              date.foods.map(food => (
                <FoodCard
                  food={food}
                  handleOnPress={() => handleFoodNavigate(food)}
                  status={food.status === 'YES' ? 'INSIDE' : 'OUTSIDE'}
                />
              ))
            }
          </>
        ))
      }
    </S.Container >
  )
}
