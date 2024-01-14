import { WeatherIconProps } from './WeatherIcon.types';

const WeatherIcon = (props: WeatherIconProps) => {
  if ('name' in props) {
    return (
      <img
        src={`https://openweathermap.org/img/wn/${props.name}@2x.png`}
        className='icon'
      />
    );
  } else if ('id' in props) {
    const { id, theme = '' } = props;
    return <i className={`wi wi-owm-${theme}${theme && '-'}${id} icon`}></i>;
  } else if ('class' in props) {
    return <i className={`wi wi-${props.class} icon`}></i>;
  }
};

export default WeatherIcon;
