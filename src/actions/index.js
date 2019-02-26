import axios from 'axios';
import FETCH_WEATHER from './action-types';

const API_KEY = 'e720ab37b4103bd90f7848beba6372c3';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

const fetchWeather = city => {
  const url = `${ROOT_URL}&q=${city},ua`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
};

export default fetchWeather;
