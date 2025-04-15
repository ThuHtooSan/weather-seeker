import { AxiosError } from 'axios';
import { CurrentWeather, ForecastData } from '../types';
import {
  ExtractIpErrorResponse,
  OpenWeatherMapErrorResponse,
} from '../types/ErrorResponses';
import { RefactoredForecastData } from '../types/Forecasts';
import { IpInfo } from '../types/IpInfo';

export type State = {
  configs: {
    unit: 'imperial' | 'metric';
  };
  loading: boolean;
  error: string | null;
  weather: {
    current: CurrentWeather | null;
    forecast: RefactoredForecastData | null;
  };
  ipInfo: IpInfo | null;
};

export type Action =
  | NoPayloadActions
  | FetchWeatherDataSuccessAction
  | FetchIPSuccessAction
  | FetchFailureAction;

type NoPayloadActions = {
  type:
    | 'RESTORE_UNIT'
    | 'TOGGLE_UNIT'
    | 'FETCH_START'
    | 'DISMISS_ERROR'
    | 'RESET_WEATHER';
};

type FetchWeatherDataSuccessAction = {
  type: 'FETCH_WEATHER_DATA_SUCCESS';
  payload: [CurrentWeather, ForecastData];
};

type FetchIPSuccessAction = {
  type: 'FETCH_IP_SUCCESS';
  payload: IpInfo;
};

type FetchFailureAction = {
  type: 'FETCH_FAIL';
  payload: ExtractIpErrorResponse | OpenWeatherMapErrorResponse | AxiosError;
};
