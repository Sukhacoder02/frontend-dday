import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';
const ERROR_ROUTE = '/error';

const makeRequest = async (apiEndPoint: any, config = {}, navigate?: NavigateFunction, headers?: any) => {
  const requestDetails = {
    url: apiEndPoint.url,
    method: apiEndPoint.method,
    ...config,
  };
  console.log(requestDetails);

  try {
    const { data } = await axios(requestDetails);
    return data;
  } catch (err: any) {
    if (navigate) {
      if (err.response?.data?.statusCode) {
        navigate(`${ERROR_ROUTE}/${err.response.data.statusCode}`);
      } else {
        navigate(ERROR_ROUTE);
      }
    }
  }
};

export default makeRequest;
