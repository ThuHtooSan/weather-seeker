import { useEffect } from 'react';
import { useAppContext } from '../../hooks';
import { Spinner } from '../../components';
import { IpInfo } from '../../types/IpInfo';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError, isAxiosError } from 'axios';
import { ExtractIpErrorResponse } from '../../types/ErrorResponses';

const Home = () => {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      dispatch({
        type: 'FETCH_START',
      });

      const res = await axios.get<IpInfo>('https://myip.wtf/json');

      dispatch({
        type: 'FETCH_IP_SUCCESS',
        payload: res.data,
      });

      // please don't mind the words – it comes from the API itself, not from me :)
      const { YourFuckingCity: city, YourFuckingCountry: country } = res.data;
      navigate(`/weather?city=${city}&country=${country}`);
    } catch (err) {
      console.error(err);

      if (isAxiosError<ExtractIpErrorResponse>(err)) {
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
