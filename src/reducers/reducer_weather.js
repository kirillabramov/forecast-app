import FETCH_WEATHER from '../actions/action-types';

const reducerWeather = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_WEATHER:
      return [...state, payload.data];
    default:
      return state;
  }
};

export default reducerWeather;
