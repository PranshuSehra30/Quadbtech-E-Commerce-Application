import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate , useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/authSlice';
import Layout from '../../components/layout/Layout';
import { useAuth } from '../../context/auth1';
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [auth, setAuth ] = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
const location = useLocation();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, data);

      if (response.status === 200) {
        const { user, token } = response.data;
        const authData = { user, token };

        // Store user data in Redux
        dispatch(login(authData));

        // Store user data in localStorage
        localStorage.setItem('authData', JSON.stringify(authData));
       
   setAuth({
    ...auth,
    user: response.data.user,
    token: response.data.token,
   });
   localStorage.setItem('auth', JSON.stringify(response.data));
        toast.success(response.data.message);
        navigate(location.state || '/');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('An error occurred', error);
      toast.error('An error occurred');
    }
  };

  return (
    <Layout title="Login to QuadB Store">
      <div className="form-container mt-5">
        <div className='login'>
          <h1>Welcome Back 😊</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p className="text-danger">{errors.email.message}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p className="text-danger">{errors.password.message}</p>}
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
