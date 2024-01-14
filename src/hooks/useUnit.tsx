import { useAppContext } from './useAppContext';

const units: Units = {
  temperature: {
    metric: '°C',
    imperial: '°F',
  },
  pressure: {
    metric: 'hPa',
    imperial: 'hPa',
  },
  wind_speed: {
    metric: 'm/s',
    imperial: 'mph',
  },
  rain: {
    metric: 'mm',
    imperial: 'mm',
  },
  snow: {
    metric: 'mm',
    imperial: 'mm',
  },
  visibility: {
    metric: 'm',
    imperial: 'm',
  },
};

type Units = {
  temperature: {
    metric: '°C';
    imperial: '°F';
  };
  pressure: {
    metric: 'hPa';
    imperial: 'hPa';
  };
  wind_speed: {
    metric: 'm/s';
    imperial: 'mph';
  };
  rain: {
    metric: 'mm';
    imperial: 'mm';
  };
  snow: {
    metric: 'mm';
    imperial: 'mm';
  };
  visibility: {
    metric: 'm';
    imperial: 'm';
  };
};

const useUnit = () => {
  const { state } = useAppContext();

  const getUnit = <T extends keyof Units>(measurement: T) => {
    return units[measurement][
      state.configs.unit
    ] as Units[T][typeof state.configs.unit];
  };

  return { getUnit, currentUnit: state.configs.unit };
};

export { useUnit };
