import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_COLLECTION } from "@storage/storageConfig";
import { FoodModel } from "./FoodModel";

export async function foodRemoveById(id: string) {
  try {
    AsyncStorage.removeItem(FOOD_COLLECTION)
    // const storage = await AsyncStorage.getItem(FOOD_COLLECTION)
    // const foodsStorage: FoodModel[] = storage ? JSON.parse(storage) : []
    // const foods = foodsStorage.filter(food => food.id !== id)
    // return foods
  } catch (error) {
    throw error
  }
}
