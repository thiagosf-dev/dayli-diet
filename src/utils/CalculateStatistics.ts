import { foodsGetAll } from "@storage/food/foodsGetAll"

export type StatisticsInfoType = {
  amountFoods?: number
  amountIncomeFood: number
  amountOutcomeFood: number
  isPositiveBalance: boolean
  percetIncomeFood: number
  percetOutcomeFood: number
}

export async function calculateStatistics() {
  let foodsStorage = null

  try {
    foodsStorage = await foodsGetAll()
  } catch (error) {
    console.error(error)
  }

  const totalFoods = foodsStorage?.length

  return foodsStorage?.reduce(
    (result: StatisticsInfoType, food) => {
      if (food.status === 'YES') {
        result.amountIncomeFood += 1
        result.percetIncomeFood = result.amountIncomeFood / (totalFoods || 0) * 100
      } else {
        result.amountOutcomeFood += 1
        result.percetOutcomeFood = result.amountOutcomeFood / (totalFoods || 0) * 100
      }

      result.isPositiveBalance = result.percetIncomeFood >= 50

      return result
    },
    {
      amountFoods: totalFoods,
      amountIncomeFood: 0,
      amountOutcomeFood: 0,
      isPositiveBalance: false,
      percetIncomeFood: 0,
      percetOutcomeFood: 0
    }
  )
}
