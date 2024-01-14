import { useEffect } from 'react';
import { About, ErrorInfo, Header, Particles } from './components';
import './sass/base.scss';
import './weather-icons/weather-icons.min.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Weather } from './pages';
import { useAppContext } from './hooks';

function App() {
  const { dispatch } = useAppContext();

  useEffect(() => {
    dispatch({ type: 'RESTORE_UNIT' });
  }, []);

  return (
    <>
      <Particles />
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/weather'
          element={<Weather />}
        />
      </Routes>
      <About />
      <ErrorInfo />
    </>
  );
}

export default App;
