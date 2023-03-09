import * as React from 'react';
import './LoginPage.css';
import loginImage from '../../assets/login-image/undraw-upload-re-pasx.png';
import makeRequest from '../../utils/MakeRequest';
import { login, signup } from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { log } from 'console';

interface LoginPageProps {
  title: string;
  buttonText: string;
  login: boolean;
}
const LoginPage: React.FC<LoginPageProps> = (props: LoginPageProps): JSX.Element => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (e: any) => {
    console.log('in form submit');
    e.preventDefault();

    if (email && password) {
      if (props.login) {
        await login(email, password);
        console.log('loggin');
        navigate('/home');
      } else {
        console.log('signup');
        await signup(email, password);
        navigate('/login');
      }
    }
  };

  return (
    <div className="loginPage">
      <div className="image">
        <img src={loginImage} alt="CMS image" />
      </div>
      <div className="container">
        <div className="subcontainer">
          <div className="heading">
            <h1 className="text-3xl text-white">{props.title}</h1>
          </div>
          <div className="login">
            <form className=" rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-white text-xs font-bold mb-2" htmlFor="username">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="email"
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="mb-6">
                <label className="block text-white text-xs font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                />
                {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
              </div>
              <div className="flex flex-col items-center justify-between">
                <button
                  className="login-button hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit">
                  {props.buttonText}
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="/signup">
                  {props.login && 'SignUp instead'}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
