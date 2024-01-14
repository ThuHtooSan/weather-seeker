import { CurrentWeather } from '../../types';
import { RefactoredForecastData } from '../../types/Forecasts';

export type WeatherDetailsContainerProps = {
  currentWeather: CurrentWeather;
  forecastData: RefactoredForecastData;
};
