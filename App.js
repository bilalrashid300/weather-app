import { useFonts } from "expo-font";
import { Text } from "react-native";
import Home from "./views/home";

export default function App() {
  let [fontsLoaded] = useFonts({
    RedressedRegular: require("./assets/fonts/Redressed-Regular.ttf"),
  });

  return (
    fontsLoaded ? (
      <Home />
    ) : <Text>Loading...</Text>
  );
}

