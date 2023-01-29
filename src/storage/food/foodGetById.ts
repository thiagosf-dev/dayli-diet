import AsyncStorage from "@react-native-async-storage/async-storage";
import { foodsGetAll } from '@storage/food/foodsGetAll';
import { FOOD_COLLECTION } from "@storage/storageConfig";

export async function foodGetById(id: string) {
  try {
    const foodsStorage = await foodsGetAll()
    const foods = foodsStorage.filter(food => food.id !== id)
    await AsyncStorage.setItem(
      FOOD_COLLECTION,
      JSON.stringify(foods)
    )
    return foods
  } catch (error) {
    throw error
  }
}
