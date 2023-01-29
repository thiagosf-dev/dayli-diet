import AsyncStorage from "@react-native-async-storage/async-storage";
import { SEQUENCE_COLLECTION } from "@storage/storageConfig";
import { foodSequenceInfoGet } from "./foodSequenceInfoGet";

export async function foodSequenceInfoUpdate(isPartOfDiet: boolean) {
  try {
    const storageSequence = await foodSequenceInfoGet()
    const currentSequence = isPartOfDiet ? storageSequence.currentSequence + 1 || 1 : 0

    let longestSequence = currentSequence >= storageSequence.longestSequence ?
      currentSequence || 0 :
      storageSequence.longestSequence || 0

    const sequenceInfo = JSON.stringify({ currentSequence, longestSequence })

    await AsyncStorage.setItem(
      SEQUENCE_COLLECTION,
      sequenceInfo
    )
  } catch (error) {
    throw error
  }
}
