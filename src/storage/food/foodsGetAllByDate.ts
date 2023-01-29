import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_COLLECTION } from "@storage/storageConfig";
import { FoodModel } from "./FoodModel";

export async function foodsGetAllByDate(date: string) {
  try {
    const storage = await AsyncStorage.getItem(`${FOOD_COLLECTION}-${date}`)
    const foods: FoodModel[] = storage ? JSON.parse(storage) : []
    return foods
  } catch (error) {
    throw error
  }
}
