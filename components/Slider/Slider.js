import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { sliderStyle } from "../../assets/style/style";

const Slider = ({ data }) => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const sliderImageWidth = windowWidth - 60;
  const sliderImageHeight = windowHeight * 0.25;

  const SliderList = data?.map((item, index) => {
    return (
      <View
        key={index}
        style={{
          ...sliderStyle.imgContainer,
          width: sliderImageWidth,
          height: sliderImageHeight,
        }}
      >
        <ImageBackground source={item?.image} style={sliderStyle.image}>
          <Text style={sliderStyle.sliderTitle}>
            {item?.temp}
            {"\u00b0"}C
          </Text>
          <Text style={sliderStyle.imgTitle}>{item?.city}</Text>
        </ImageBackground>
      </View>
    );
  });

  return (
    <ScrollView
      horizontal={true}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    >
      {SliderList}
    </ScrollView>
  );
};

export default Slider;
