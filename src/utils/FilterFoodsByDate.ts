import { FoodModel } from "@storage/food/FoodModel";

export function filterFoodByDate(foodsStorage: FoodModel[]) {
  return foodsStorage.reduce((result: any, food) => {
    const temp = result[food.date] || []
    result = {
      ...result,
      [food.date]: [
        ...temp,
        food
      ]
    }
    return result
  }, {})
}
