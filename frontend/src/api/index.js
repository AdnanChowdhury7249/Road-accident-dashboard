import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/"
})

export const getTotalAccidents = () => API.get(`api/total_accidents`);
export const getMostCommonWeatherConditions = () => API.get(`api/weather`)
export const getNumberOfFatalAccidents = () => API.get(`api/fatal_accidents`)
export const getAccidentsByDay = () => API.get(`api/accident_by_day`)
export const getMonthlyTrend = () => API.get(`api/monthly_trend`)
export const getRoadConditions = () => API.get(`api/road_conditions`)
export const getHeatMapData = (south, north, west, east) =>
  API.get("api/heat_map", {
    params: {
      south,
      north,
      west,
      east,
    },
  });


