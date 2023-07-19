import axios from 'axios';

const login = async (email: string, password: string) => {
  return axios.post('http://localhost:1111/api/login', {
    email: email,
    password: password,
  });
};

const signup = async (email: string, password: string) => {
  return axios.post('http://localhost:1111/api/register', {
    email: email,
    password: password,
  });
};

export { login, signup };
