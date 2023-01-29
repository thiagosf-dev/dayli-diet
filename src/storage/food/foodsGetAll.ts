import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_COLLECTION } from "@storage/storageConfig";
import { FoodModel } from "./FoodModel";

export async function foodsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(FOOD_COLLECTION)
    const foods: FoodModel[] = storage ? JSON.parse(storage) : []
    return foods
  } catch (error) {
    throw error
  }
}
