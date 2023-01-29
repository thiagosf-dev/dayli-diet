import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_COLLECTION, SEQUENCE_COLLECTION } from "@storage/storageConfig";

export async function foodRemoveAll() {
  try {
    AsyncStorage.removeItem(FOOD_COLLECTION)
    AsyncStorage.removeItem(SEQUENCE_COLLECTION)
  } catch (error) {
    throw error
  }
}
