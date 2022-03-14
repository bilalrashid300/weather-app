import { StatusBar, StyleSheet } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { colors } from "./color";

const FontFamily = "RedressedRegular";
export const sliderStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight + 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  heading: {
    fontFamily: FontFamily,
    fontWeight: "400",
    fontSize: 28,
  },
  imgContainer: {
    margin: 10,
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imgTitle: {
    fontSize: 28,
    fontFamily: FontFamily,
    color: colors.white,
  },
  sliderTitle: {
    fontSize: 48,
    fontFamily: FontFamily,
    color: colors.white,
  },
});

export const infoBoxStyle = StyleSheet.create({
  weatherCard: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    borderColor: colors.white,
    borderWidth: 2,
    borderStyle: "solid",
    width: "100%",
    height: 200,
  },
  mainBox: {
    flex: 1,
    width: "100%",
    margin: 10,
    zIndex: 0,
  },
  outlineBox: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  innerBox: {
    borderRadius: 10,
    backgroundColor: colors.lightWhite,
    padding: 10,
    width: "49%",
    marginBottom: 8,
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  boxText: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.white,
  },
  boldText: {
    fontWeight: "700",
  },
  fullWidth: {
    width: "100%",
    maxHeight: 65,
    alignItems: "center",
    justifyContent: "center",
  },
  itemBox: {
    width: "32%",
  },
});

export const dropdown = StyleSheet.create({
  wrapper: {
    position: "relative",
    zIndex: 12500,
  },
  dropdown: {
    marginBottom: 10,
    // backgroundColor: 'transparent',
    // color: colors.white,
    // borderColor: colors.white,
    // borderWidth: 2
  },
  dropdownText: {
    // color: colors.white,
  },
  container: {
    zIndex: 10000,
    borderColor: colors.black,
  },
  dropdownLabel: {
    borderColor: colors.black,
  }
});
