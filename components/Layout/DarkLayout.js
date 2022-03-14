import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "react-native";
import { sliderStyle } from "../../assets/style/style";

const DarkLayout = ({ children }) => {
  return (
    <LinearGradient
      colors={["#575757", "#222222", "#181818"]}
      style={sliderStyle.container}
      start={{ x: 0.7, y: 0 }}
    >
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={{ backgroundColor: "#772ea2" }}
        Color={{ color: "#fff" }}
      />
      {children}
    </LinearGradient>
  );
};

export default DarkLayout;
