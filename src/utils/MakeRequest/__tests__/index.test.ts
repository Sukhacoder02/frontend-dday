import makeRequest from '..';
import axios from 'axios';

const UtilMocks = {
  mockedResponse: {
    data: {
      message: 'Hello AXIOS',
    },
  },
  mockedApiEndPoint: {
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    method: 'GET',
  },
  mockedRequestDetails: {
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    method: 'GET',
  },
  mockedNavigate: jest.fn(),
};
jest.mock('axios');

describe('Util MakeRequest', () => {
  const mockedAxios = axios as jest.MockedFunction<typeof axios>;
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('Should make an API request and return correct response when only api endpoint is passed', async () => {
    mockedAxios.mockResolvedValueOnce(UtilMocks.mockedResponse);
    expect(mockedAxios).not.toHaveBeenCalled();
    const response = await makeRequest(UtilMocks.mockedApiEndPoint);
    expect(mockedAxios).toHaveBeenCalledTimes(1);
    expect(mockedAxios).toHaveBeenCalledWith(UtilMocks.mockedRequestDetails);
    expect(response.message).toEqual('Hello AXIOS');
  });
  it('Should make an API request and return correct response when api endpoint and config is passed', async () => {
    mockedAxios.mockResolvedValueOnce(UtilMocks.mockedResponse);
    expect(mockedAxios).not.toHaveBeenCalled();
    const response = await makeRequest(UtilMocks.mockedApiEndPoint, {
      data: {
        likes: 1,
      },
    });
    expect(mockedAxios).toHaveBeenCalledTimes(1);
    expect(mockedAxios).toHaveBeenCalledWith({
      ...UtilMocks.mockedRequestDetails,
      data: {
        likes: 1,
      },
    });
    expect(response.message).toEqual('Hello AXIOS');
  });
  it('Should call navigate to ErrorPage when there is an error with no statusCode in making a request', async () => {
    mockedAxios.mockRejectedValueOnce({ response: 'HHE' });
    expect(mockedAxios).not.toHaveBeenCalled();
    await makeRequest(UtilMocks.mockedApiEndPoint, {}, UtilMocks.mockedNavigate);
    expect(UtilMocks.mockedNavigate).toHaveBeenCalled();
    expect(UtilMocks.mockedNavigate).toHaveBeenCalledWith('/error');
  });
  it('Should call navigate to ErrorPage with statusCode when there is an error with a status code in making a request', async () => {
    mockedAxios.mockRejectedValueOnce({
      response: {
        data: {
          statusCode: '404',
        },
      },
    });
    expect(mockedAxios).not.toHaveBeenCalled();
    await makeRequest(UtilMocks.mockedApiEndPoint, {}, UtilMocks.mockedNavigate);
    expect(UtilMocks.mockedNavigate).toHaveBeenCalled();
    expect(UtilMocks.mockedNavigate).toHaveBeenCalledWith('/error/404');
  });
});
