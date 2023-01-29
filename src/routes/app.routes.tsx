import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Food } from "@screens/Food";
import { FormAddFood } from "@screens/FormAddFood";
import { Home } from "@screens/Home";
import { RegistrationAlert } from "@screens/RegistrationAlert";
import { RegistrationCongratulations } from "@screens/RegistrationCongratulations";
import { Statistics } from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator()

export const AppRoutes = () => {
  return (
    <Navigator
      initialRouteName={'home'}
      screenOptions={{ headerShown: false }}
    >
      <Screen
        name={'home'}
        component={Home}
      />

      <Screen
        name={'food'}
        component={Food}
      />

      <Screen
        name={'formAddFood'}
        component={FormAddFood}
      />

      <Screen
        name={'registrationCongratulations'}
        component={RegistrationCongratulations}
      />

      <Screen
        name={'registrationAlert'}
        component={RegistrationAlert}
      />

      <Screen
        name={'statistics'}
        component={Statistics}
      />
    </Navigator>
  )
}
