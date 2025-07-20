import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/"
})

export const getTotalAccidents = () => API.get(`api/total_accidents`);
export const getMostCommonWeatherConditions = () => API.get(`api/weather`)

