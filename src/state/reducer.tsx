import { Action, State } from './reducer.types';
import { getDay, getMonth } from '../functions';
import { DayInNumber } from '../functions/getDay';
import { MonthInNumber } from '../functions/getMonth';
import { DateInNum } from '../components/WeatherForecast/WeatherForecast.types';
import {
  ForecastDataByDay,
  RawWeather,
  RefactoredForecast,
} from '../types/Forecasts';

const initialState: Readonly<State> = {
  configs: {
    unit: 'metric',
  },
  loading: false,
  error: null,
  weather: {
    current: null,
    forecast: null,
  },
  ipInfo: null,
};

const reducer = (state: State, action: Action): State => {
  if (import.meta.env.DEV) {
    console.log(action.type);
  }

  switch (action.type) {
    case 'RESTORE_UNIT': {
      const configs = localStorage.getItem('configs') || '{}';
      return {
        ...state,
        configs: {
          ...state.configs,
          unit: JSON.parse(configs)?.unit || 'metric',
        },
      };
    }
    case 'TOGGLE_UNIT':
      const unit = state.configs.unit === 'metric' ? 'imperial' : 'metric';
      localStorage.setItem('configs', JSON.stringify({ unit }));
      return {
        ...state,
        configs: {
          ...state.configs,
          unit,
        },
      };
    case 'FETCH_START':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_IP_SUCCESS':
      return {
        ...state,
        loading: false,
        ipInfo: action.payload,
      };
    case 'FETCH_WEATHER_DATA_SUCCESS':
      // round temperature digits
      const currentWeather = action.payload[0];
      const main = action.payload[0].main;
      const [temp, temp_min, temp_max, feels_like] = [
        main.temp,
        main.temp_min,
        main.temp_max,
        main.feels_like,
      ].map(temp => Math.round(Number(temp)));

      // refactor weather forecast data
      const forecastData = action.payload[1];
      const date = new Date();
      const currentDate = date.getDate();
      const currentHours = date.getHours();

      const list: RefactoredForecast[] = forecastData.list
        // sort forecasts by day
        .reduce((result: ForecastDataByDay, data) => {
          const itemDate = new Date(data.dt * 1000).getDate();
          const dateOffset = itemDate - currentDate;

          if (dateOffset > 0) {
            const index = dateOffset - 1;

            if (!result[index]) {
              result.push([data]);
            } else {
              result[index].push(data);
            }
          }
          return result;
        }, [])
        .map(day => {
          const dateObj = new Date(day[0].dt * 1000);

          // combine hourly min/max temps in arrays
          const rawWeather = day.reduce(
            (result: RawWeather, hour, index, arr) => {
              const hours = new Date(hour.dt * 1000).getHours();
              result.minTemps.push(Math.round(Number(hour.main.temp_min)));
              result.maxTemps.push(Math.round(Number(hour.main.temp_max)));

              if (!result.weather.length) {
                if (hours >= currentHours || index === arr.length - 1) {
                  result.weather.push(hour.weather[0]);
                }
              }
              return result;
            },
            { minTemps: [], maxTemps: [], weather: [] }
          );

          return {
            temp: {
              min: rawWeather.minTemps.sort((a, b) => a - b)[0],
              max: rawWeather.maxTemps.sort((a, b) => b - a)[0],
            },
            weather: rawWeather.weather[0],
            // add date info as an extra info
            // to be used in UI components easily
            date: {
              date: dateObj.getDate() as DateInNum,
              day: getDay(dateObj.getDay() as DayInNumber),
              month: getMonth(dateObj.getMonth() as MonthInNumber),
            },
          };
        });

      return {
        ...state,
        loading: false,
        weather: {
          current: {
            ...currentWeather,
            main: {
              ...currentWeather.main,
              temp,
              temp_min,
              temp_max,
              feels_like,
            },
          },
          forecast: {
            ...forecastData,
            list,
          },
        },
      };
    case 'FETCH_FAIL':
      let error = 'Unknown error';
      if ('message' in action.payload) {
        error = action.payload.message;
      } else if ('error' in action.payload) {
        error = action.payload.error.message;
      }
      return {
        ...state,
        error,
        loading: false,
      };
    case 'DISMISS_ERROR':
      return {
        ...state,
        error: null,
      };
    case 'RESET_WEATHER':
      return {
        ...state,
        weather: { current: null, forecast: null },
      };
    default: {
      return state;
    }
  }
};

export { initialState, reducer };
