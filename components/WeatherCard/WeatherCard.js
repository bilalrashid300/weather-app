import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { infoBoxStyle, sliderStyle } from "../../assets/style/style";

const WeatherCard = (data) => {
  const { name , main } = data.data;
  return (
    <View style={infoBoxStyle.weatherCard}>
      <Text style={sliderStyle.sliderTitle}>
        {Math.trunc(main?.temp) || 0}
        {"\u00b0"}C
      </Text>
      <Text style={sliderStyle.imgTitle}>{name}</Text>
    </View>
  );
};

export default WeatherCard;
