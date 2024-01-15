import { useSearchParams } from 'react-router-dom';
import { Spinner, WeatherDetailsContainer } from '../../components';
import { useEffect } from 'react';
import { useAppContext } from '../../hooks';
import axios, { AxiosError, isAxiosError } from 'axios';
import { CurrentWeather, ForecastData } from '../../types';
import { OpenWeatherMapErrorResponse } from '../../types/ErrorResponses';

const Weather = () => {
  const { state, dispatch } = useAppContext();
  const { current, forecast } = state.weather;
  const [searchParams, _] = useSearchParams();
  let { city, country, lat, lon } = Object.fromEntries(searchParams.entries());
  lat = Number(lat).toFixed(2);
  lon = Number(lon).toFixed(2);

  const fetchWeatherByCoord = async () => {
    return Promise.all([
      axios.get<CurrentWeather>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lat}&appid=${
          import.meta.env.VITE_OWM_KEY
        }&units=${state.configs.unit}`
      ),
      axios.get<ForecastData>(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_OWM_KEY
        }&units=${state.configs.unit}`
      ),
    ]);
  };

  const fetchWeatherByCity = async () => {
    return Promise.all([
      axios.get<CurrentWeather>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}${
          country ? `,${country}` : ''
        }&appid=${import.meta.env.VITE_OWM_KEY}&units=${state.configs.unit}`
      ),
      axios.get<ForecastData>(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}${
          country ? `,${country}` : ''
        }&appid=${import.meta.env.VITE_OWM_KEY}&units=${state.configs.unit}`
      ),
    ]);
  };

  const fetchWeather = async () => {
    dispatch({ type: 'FETCH_START' });
    try {
      const res = city
        ? await fetchWeatherByCity()
        : await fetchWeatherByCoord();
      const data = res.map(res => res.data) as [CurrentWeather, ForecastData];
      dispatch({ type: 'FETCH_WEATHER_DATA_SUCCESS', payload: data });
    } catch (err) {
      console.error(err);

      if (isAxiosError<OpenWeatherMapErrorResponse>(err)) {
        if (err.response?.data) {
          dispatch({
            type: 'FETCH_FAIL',
            payload: err.response.data,
          });
        } else {
          dispatch({
            type: 'FETCH_FAIL',
            payload: err as AxiosError,
          });
        }
      }
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [state.configs.unit, lat, lon, city]);

  return (
    <>
      <Spinner title='Fetching weather' />
      {!state.loading && (
        <WeatherDetailsContainer
          currentWeather={current}
          forecastData={forecast}
        />
      )}
    </>
  );
};

export default Weather;
