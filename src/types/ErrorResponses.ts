export type ExtractIpErrorResponse = {
  error: {
    message: string;
    code: string;
  };
};

export type OpenWeatherMapErrorResponse = {
  cod: string;
  message: string;
};
