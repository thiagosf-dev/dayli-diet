import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans';
import { Home } from '@screens/Home';
import theme from '@theme/index';
import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  const [fontsLoader] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      {fontsLoader ? <Home /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
