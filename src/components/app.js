import React from 'react';
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';

const App = _ => {
  return (
    <div className="App">
      <SearchBar />
      <WeatherList />
    </div>
  );
};

export default App;
