export type AbstractErrorResponse = {
  error: {
    message: string;
    code: string;
    details: null | string;
  };
};

export type OpenWeatherMapErrorResponse = {
  cod: string;
  message: string;
};
