import { Text, View } from "react-native";
import { infoBoxStyle } from "../../assets/style/style";

const FormRow = ({ label, value, style }) => {
  return (
    <View style={style}>
      <Text style={{ ...infoBoxStyle.boxText, ...infoBoxStyle?.boldText }}>
        {label}
      </Text>
      <Text style={infoBoxStyle.boxText}>{value}</Text>
    </View>
  );
};

export default FormRow;
