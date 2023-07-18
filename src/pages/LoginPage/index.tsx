import * as React from 'react';
import loginImage from '../../assets/login-image/undraw-upload-re-pasx.png';
import makeRequest from '../../utils/MakeRequest';
import { login, signup } from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';

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
    <div className="flex flex-row items-center justify-center h-full w-full">
      <div className="bg-[#eff3ff] h-full w-3/5 flex items-center flex-col justify-center relative overflow-hidden">
        <div className="h-full w-full p-[15%] flex flex-col justify-center">
          <div className="h-1/5">
            <div className="fixed z-50">
              <h1 className="text-4xl font-black ">Design APIs fast,</h1>
              <br />
              <h1 className="text-4xl font-black ">Manage content easily.</h1>
            </div>
          </div>
          <div className="p-[10%] flex justify-center z-50 h-4/5">
            <img src={loginImage} alt="CMS image" />
          </div>
        </div>
        <div className="rounded-full bg-white h-48 w-48 absolute top-5 right-5"></div>
        <div className="rounded-full bg-white h-32 w-32 absolute top-44 right-44"></div>
        <div className="rounded-full bg-white h-48 w-48 absolute bottom-20 left-0"></div>
        <div className="rounded-full bg-white h-32 w-32 absolute -bottom-10 left-36"></div>
      </div>
      <div className="flex flex-col justify-center items-center h-full w-2/5 bg-[#272727]">
        <div className="flex flex-col items-center h-3/5 w-4/5 gap-40">
          <div className="heading">
            <h1 className="text-3xl text-white font-black">{props.title}</h1>
          </div>
          <div className="input-form w-full">
            <form onSubmit={handleFormSubmit} className="flex flex-col items-center justfiy-center">
              <label htmlFor="" className="text-slate-300 justify-self-start text-xs w-3/5">
                Email
              </label>
              <input type="text" className=" h-10 pl-2  pr-2 rounded mb-6 w-3/5 mt-2" />
              <label htmlFor="" className="text-slate-300 text-xs w-3/5">
                Password
              </label>
              <input type="password" className=" h-10 pl-2 pr-2 rounded mb-10 w-3/5 mt-2" />
              <button type="submit" className="bg-gradient-to-r from-[#8b61ff] to-[#af61ff] w-3/5  h-10 rounded ">
                {props.buttonText}
              </button>
              <a href="#" className="text-slate-300 text-xs mt-5 underline">
                Forgot Password?
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
