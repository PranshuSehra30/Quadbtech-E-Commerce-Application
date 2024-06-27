import  { useState, useEffect } from 'react';
import axios from 'axios';

import { Outlet } from 'react-router-dom';
import Spinner from '../Spinner';
import { useAuth } from '../../context/auth1';
export default function PrivateRoute() {
  const [ok, setOK] = useState(false);
  const [auth,setAuth] =useAuth();
  
 

  

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/user-auth`, {
          headers: {
            token: auth?.token
          }
        });
        if (res.data.ok) {
          setOK(true);
        } else {
          setOK(false);
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
        setOK(false);
      }
    };

    if (auth?.token) {
      authCheck();
    }
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
}
