type OpenWeatherMap = {
  name: string;
};

type WeatherIconsRepo = OWMCompatible | UtilClass;

type OWMCompatible = {
  id: number;
  theme?: Theme;
};

type UtilClass = {
  class: string;
};

export type WeatherIconProps = OpenWeatherMap | WeatherIconsRepo;

export type Theme = 'day' | 'night';
