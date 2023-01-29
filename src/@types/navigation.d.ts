import { FoodModel } from "@storage/food/FoodModel"

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      food: FoodModel
      formAddFood?: FoodModel
      registrationDone: undefined
      statistics: undefined
    }
  }
}
