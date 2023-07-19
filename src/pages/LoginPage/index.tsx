import * as React from 'react';
import loginImage from '../../assets/login-image/undraw-upload-re-pasx.png';
import makeRequest from '../../utils/MakeRequest';
import { login, signup } from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { FormikValues, useFormik } from 'formik';
import { Alert, Snackbar } from '@mui/material';

interface LoginPageProps {
  title: string;
  buttonText: string;
  login: boolean;
}
const LoginPage: React.FC<LoginPageProps> = (props: LoginPageProps): JSX.Element => {
  const navigate = useNavigate();
  const [isSnakBarOpen, showSnackBar] = React.useState({ open: false, message: '' });

  const handleFormSubmit = async (values: FormikValues) => {
    const email = values.email;
    const password = values.password;
    if (props.login) {
      try {
        let response = await login(email, password);
        response = response.data;
        localStorage.setItem('user', JSON.stringify(response));
        navigate('/home');
      } catch (error: any) {
        const errorResponse = error.response;
        const errorMessage = errorResponse.data.error;
        showSnackBar({
          open: true,
          message: errorMessage,
        });
      }
    } else {
      console.log('signup');
      await signup(email, password);
      navigate('/login');
    }
  };
  const validate = (values: FormikValues) => {
    const errors: any = {};
    if (!values.email) {
      errors['email'] = 'Email is Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors['password'] = 'Password is required';
    } else if (values.password.length <= 6) {
      errors['password'] = 'Password must be atleast 6 chars long';
    }
    return errors;
  };
  const hanldeSnackBarClose = (): void => {
    showSnackBar({
      open: false,
      message: '',
    });
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: handleFormSubmit,
  });

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
            <form onSubmit={formik.handleSubmit} className="flex flex-col items-center justfiy-center">
              <label htmlFor="email" className="text-slate-300 justify-self-start text-xs w-3/5">
                Email
              </label>
              <input
                type="email"
                data-name="email"
                id="email"
                onBlur={formik.handleBlur}
                defaultValue={formik.values.email}
                className=" h-10 pl-2  pr-2 rounded mb-6 w-3/5 mt-2"
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email && (
                <span className="mb-5 text-slate-300">{formik.errors.email}</span>
              )}
              <label htmlFor="password" className="text-slate-300 text-xs w-3/5">
                Password
              </label>
              <input
                type="password"
                data-name="password"
                id="password"
                onBlur={formik.handleBlur}
                defaultValue={formik.values.password}
                onChange={formik.handleChange}
                className=" h-10 pl-2 pr-2 rounded mb-10 w-3/5 mt-2"
              />
              {formik.touched.password && formik.errors.password && (
                <span className="mb-5 text-slate-300">{formik.errors.password}</span>
              )}
              <button type="submit" className="bg-gradient-to-r from-[#8b61ff] to-[#af61ff] w-3/5  h-10 rounded ">
                {props.buttonText}
              </button>
              <a href="#" className="text-slate-300 text-xs mt-5 underline">
                Forgot Password?
              </a>
              <a href="#" className="text-slate-300 text-xs mt-5 underline"></a>
            </form>
          </div>
        </div>
      </div>
      <Snackbar
        open={isSnakBarOpen.open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        onClose={hanldeSnackBarClose}>
        <Alert onClose={hanldeSnackBarClose} severity="error" sx={{ width: '100%' }}>
          {isSnakBarOpen.message}
        </Alert>
      </Snackbar>
    </div>
  );
};
export default LoginPage;
