import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, data);

      if (response.status === 200) {
        toast.success(response.data.message);
        navigate('/'); // Assuming there's a dashboard route after login
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
