import { useEffect } from 'react';
import { useAppContext } from '../../hooks';
import { Spinner } from '../../components';
import { IpInfo } from '../../types/IpInfo';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError, isAxiosError } from 'axios';
import { AbstractErrorResponse } from '../../types/ErrorResponses';

const Home = () => {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      dispatch({
        type: 'FETCH_START',
      });

      const res = await axios.get<IpInfo>(
        `https://ipgeolocation.abstractapi.com/v1/?api_key=${
          import.meta.env.VITE_ABSTRACT_KEY
        }`
      );

      dispatch({
        type: 'FETCH_IP_SUCCESS',
        payload: res.data,
      });

      const { city, country_code } = res.data;
      navigate(`/weather?city=${city}&country=${country_code}`);
    } catch (err) {
      console.error(err);

      if (isAxiosError<AbstractErrorResponse>(err)) {
        if (err.response?.data) {
          dispatch({
            type: 'FETCH_FAIL',
            payload: err.response.data,
          });
        } else {
          dispatch({
            type: 'FETCH_FAIL',
            payload: err as AxiosError,
          });
        }
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Spinner title='Determining your location' />
    </>
  );
};

export default Home;
