import moment from "moment";
import { useState, useEffect } from "react";
import { View } from "react-native";
// import { Dropdown } from "react-native-material-dropdown";
import DropDownPicker from "react-native-dropdown-picker";
import { getWeatherByLatLong } from "../../api/weather";
import { dropdown, infoBoxStyle, sliderStyle } from "../../assets/style/style";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import FormRow from "../../components/FormRow/FormRow";
import DarkLayout from "../../components/Layout/DarkLayout";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import { HomeData } from "./data";

const Home = () => {
  const [content, setContent] = useState(HomeData);

  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({
    label: "Lahore",
    value: "lahore",
    lat: 31.5204,
    long: 74.3587,
  });
  const [items, setItems] = useState([
    { label: "Karachi", value: "karachi", lat: 24.8607, long: 67.0011 },
    { label: "Lahore", value: "lahore", lat: 31.5204, long: 74.3587 },
  ]);

  const getWeatherDetail = async () => {
    const result = await getWeatherByLatLong(value);
    if (result?.status) {
      console.log(result.data);
      setContent({...result.data});
    }
  };

  useEffect(() => {
    getWeatherDetail();
  }, [value]);

  return (
    <DarkLayout>
      <View style={dropdown.wrapper}>
        <Dropdown
          open={open}
          setOpen={setOpen}
          value={value}
          setValue={setValue}
          items={items}
          setItems={setItems}
        />
      </View>
      <WeatherCard data={content} />
      <View style={infoBoxStyle.mainBox}>
        <View
          style={{
            ...infoBoxStyle.innerBox,
            ...infoBoxStyle.fullWidth,
            ...infoBoxStyle.outlineBox,
          }}
        >
          <FormRow
            label="Country:"
            value={content?.sys?.country}
            style={infoBoxStyle.itemBox}
          />
          <FormRow
            label="Lat:"
            value={content?.coord?.lat}
            style={infoBoxStyle.itemBox}
          />
          <FormRow
            label="Long:"
            value={content?.coord?.lon}
            style={infoBoxStyle.itemBox}
          />
        </View>
        <View
          style={{
            ...infoBoxStyle.innerBox,
            ...infoBoxStyle.fullWidth,
            ...infoBoxStyle.outlineBox,
          }}
        >
          <FormRow
            label="Speed:"
            value={content?.wind?.speed}
            style={infoBoxStyle.itemBox}
          />
          <FormRow
            label="Sunrise:"
            value={moment(content?.sys?.sunrise).format("H:MM A")}
            style={infoBoxStyle.itemBox}
          />
          <FormRow
            label="Sunset:"
            value={moment(content?.sys?.sunset).format("H:MM A")}
            style={infoBoxStyle.itemBox}
          />
        </View>
        <View style={infoBoxStyle.outlineBox}>
          <FormRow
            style={infoBoxStyle.innerBox}
            label="Min Temp:"
            value={content?.main?.temp_min}
          />
          <FormRow
            style={infoBoxStyle.innerBox}
            label="Max Temp:"
            value={content?.main?.temp_max}
          />
          <FormRow
            style={infoBoxStyle.innerBox}
            label="Pressure:"
            value={content?.main?.pressure}
          />
          <FormRow
            style={infoBoxStyle.innerBox}
            label="Humidity:"
            value={content?.main?.humidity}
          />
        </View>
      </View>
    </DarkLayout>
  );
};

export default Home;
