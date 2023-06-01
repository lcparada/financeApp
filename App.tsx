import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";
import Home from "./src/screens/home";

import {
  useFonts,
  Lexend_300Light,
  Lexend_400Regular,
  Lexend_700Bold,
} from "@expo-google-fonts/lexend";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lexend_300Light,
    Lexend_400Regular,
    Lexend_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
