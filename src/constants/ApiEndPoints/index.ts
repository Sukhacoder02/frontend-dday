const BACKEND_URL = 'http://localhost:2222';
const AUTH_URL = 'http://localhost:1111/api';

const LOGIN = {
  url: `${AUTH_URL}/login`,
  method: 'POST',
};
const REGISTER = {
  url: `${AUTH_URL}/register`,
  method: 'POST',
};

export { LOGIN, REGISTER, BACKEND_URL, AUTH_URL };
