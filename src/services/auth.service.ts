import axios from 'axios';

const login = async (email: string, password: string) => {
  return axios
    .post('http://localhost:1111/api/login', {
      email: email,
      password: password,
    })
    .then(response => {
      if (response.data.token) {
        console.log('response.data.token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data));
      }
    });
};

const signup = async (email: string, password: string) => {
  return axios
    .post('http://localhost:1111/api/register', {
      email: email,
      password: password,
    })
    .then(response => {
      console.log(response);
    });
};

export { login, signup };
