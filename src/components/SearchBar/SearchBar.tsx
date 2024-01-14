import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useEffect, useRef, useState } from 'react';
import './search-bar.scss';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null!);

  const documentWidth = document.body.getBoundingClientRect().width;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/^.|(?<=\s)\w/g, m => m.toUpperCase());
    setInput(value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate(`/weather?city=${input.trim()}`);
      setInput('');
    }
  };

  const handleShortcut = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === 'k') {
      e.preventDefault();
      inputRef.current.focus();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      inputRef.current.blur();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleShortcut);

    return () => {
      document.removeEventListener('keydown', handleShortcut);
    };
  }, []);

  return (
    <div className='search-bar'>
      <div className='input-container'>
        <FontAwesomeIcon
          icon={icon({ name: 'map-pin' })}
          className='icon'
        />
        <input
          className='search'
          type='text'
          value={input}
          onChange={handleInput}
          onKeyDown={handleEnter}
          ref={inputRef}
          placeholder='Enter city name'
        />
        {documentWidth > 1000 && (
          <div className='shortcut-info'>
            <span className='key'>Ctrl</span> + <span className='key'>K</span>
          </div>
        )}
        <div className='ripple-effect'></div>
      </div>
    </div>
  );
};

export default SearchBar;
