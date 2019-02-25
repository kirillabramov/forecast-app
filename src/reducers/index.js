import { combineReducers } from 'redux';
import FETCH_WEATHER from '../actions/action-types';
import reducerWeather from './reducer_weather';

const rootReducer = combineReducers({
  weather: reducerWeather
});

export default rootReducer;
