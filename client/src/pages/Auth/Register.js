import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handlePhoneInput = (event) => {
    // Remove non-numeric characters and limit to 10 digits
    let phoneValue = event.target.value.replace(/\D/g, '').slice(0, 10);

    // Update the input value with the sanitized value
    event.target.value = phoneValue;
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, data);

      if (response.status === 200) {
        toast.success(response.data.message);
        navigate('/login');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('An error occurred', error);
      toast.error('An error occurred');
    }
  };

  return (
    <Layout title="Register at QuadB Store">
      <div className="form-container mt-5">
        <div className='register'>
          <h1>New User 😄</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="text-danger">{errors.name.message}</p>}
          </div>
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
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^\d{1,10}$/,
                  message: 'Phone number must be numeric and 10 digits max'
                }
              })}
              onInput={handlePhoneInput} // Custom handler to limit input to 10 digits
            />
            {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              {...register('address', { required: 'Address is required' })}
            />
            {errors.address && <p className="text-danger">{errors.address.message}</p>}
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
