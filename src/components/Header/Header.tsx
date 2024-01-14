import { Link } from 'react-router-dom';
import { SearchBar, Settings, WeatherIcon } from '..';
import './header.scss';

const Header = () => {
  return (
    <div className='header'>
      <Link
        to='/'
        className='title-link'
      >
        <h2 className='title'>
          <p>WeatherSeeker</p>
          <WeatherIcon class='day-haze' />
        </h2>
      </Link>
      <div className='search-bar-container'>
        <SearchBar />
        <Settings />
      </div>
    </div>
  );
};

export default Header;
