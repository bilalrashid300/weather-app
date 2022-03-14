import { API } from "."

export const getWeatherByLatLong = async (data) => {
    const response = await API.get(`weather?lat=${data.lat}&lon=${data.long}&units=metric&appid=eabe38c45b59556cc58b7d16e55ae7ff`);
    if (response.status) {
        return response;
    }
}