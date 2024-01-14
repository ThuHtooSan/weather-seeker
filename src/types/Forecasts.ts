import { DateInNum } from '../components/WeatherForecast/WeatherForecast.types';
import { Day } from '../functions/getDay';
import { Month } from '../functions/getMonth';

export type ForecastData = {
  cod: string;
  message: number;
  cnt: number;
  list: Forecast[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
};

export type Forecast = {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level?: number;
    grnd_level?: number;
    humidity: number;
    temp_kf: number;
  };
  weather: WeatherInfo[];
  clouds: {
    all: number;
  };
  rain?: {
    '3h': number;
  };
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: 'n' | 'd';
  };
  dt_txt: string;
};

type WeatherInfo = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type ForecastDataByDay = Forecast[][];

export type RawWeather = {
  minTemps: number[];
  maxTemps: number[];
  weather: WeatherInfo[];
};

export type RefactoredForecast = {
  temp: {
    min: number;
    max: number;
  };
  weather: WeatherInfo;
  date: {
    date: DateInNum;
    day: Day;
    month: Month;
  };
};

export type RefactoredForecastData = {
  list: RefactoredForecast[];
} & Omit<ForecastData, 'list'>;
