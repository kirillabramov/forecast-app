import FETCH_WEATHER from '../actions/action-types';

const initialState = {
  weather: {}
};

const reducerWeather = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_WEATHER:
      return {
        ...state,
        weather: payload.data
      };
  }
  return state;
};

export default reducerWeather;
