import AsyncStorage from "@react-native-async-storage/async-storage";
import { SEQUENCE_COLLECTION } from "@storage/storageConfig";
import { SequenceModel } from './SequenceModel';

export async function foodSequenceInfoGet() {
  try {
    const storage = await AsyncStorage.getItem(SEQUENCE_COLLECTION)
    const sequenceInfo: SequenceModel = storage ? JSON.parse(storage) : {
      currentSequence: 0,
      longestSequence: 0
    }
    return sequenceInfo
  } catch (error) {
    throw error
  }
}
