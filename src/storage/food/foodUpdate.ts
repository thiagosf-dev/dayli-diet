import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_COLLECTION } from "@storage/storageConfig";
import { FoodModel } from "./FoodModel";
import { foodsGetAll } from "./foodsGetAll";

export async function foodUpdate(foodToUpdate: FoodModel) {
  try {
    const storageFoods = await foodsGetAll()
    const index = storageFoods.findIndex(food => food.id == foodToUpdate.id)
    storageFoods[index] = foodToUpdate
    const newStorage = JSON.stringify(storageFoods)
    await AsyncStorage.setItem(
      FOOD_COLLECTION,
      newStorage
    )
  } catch (error) {
    throw error
  }
}
