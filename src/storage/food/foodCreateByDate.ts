import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppErrors";
import { FoodModel } from "./FoodModel";
import { foodsGetAll } from "./foodsGetAll";
import { foodsGetAllByDate } from "./foodsGetAllByDate";

export async function foodCreateByDate(newFood: FoodModel) {
  try {
    const storageFoods = await foodsGetAll()
    const newStorage = JSON.stringify([...storageFoods, newFood])
    const foodAlreadyExist = storageFoods.includes(newFood)

    if (foodAlreadyExist) throw new AppError('Já existe uma refeição cadastrada com esses dados!')

    const foodDateAlreadyExist = await foodsGetAllByDate(newFood.date)

    await AsyncStorage.setItem(
      `${FOOD_COLLECTION}-${newFood.date}`,
      newStorage
    )
  } catch (error) {
    throw error
  }
}
