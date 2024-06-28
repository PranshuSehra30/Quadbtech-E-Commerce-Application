// import React, { useEffect } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { loadUserFromLocalStorage } from './redux/authSlice';

// import HomePage from './pages/HomePage';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Policy from './pages/Policy';
// import Register from './pages/Auth/Register';
// import Pagenotfound from './pages/Pagenotfound';
// import Login from './pages/Auth/Login';
// import Dashboard from './pages/user/Dashboard';
// import PrivateRoute from './components/Routes/Private';
// //import PrivateRoute from './components/Routes/Private'; // Assuming this is where PrivateRoute is defined

// function App() {
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem('user'));
//     if (userData) {
//       dispatch(loadUserFromLocalStorage(userData));
//     }
//   }, [dispatch]);

//   return (
//     <>
//       <ToastContainer />
      
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/policy" element={<Policy />} />
//         {!isAuthenticated && <Route path="/register" element={<Register />} />}
//         {!isAuthenticated && <Route path="/login" element={<Login />} />}
//         <Route path="*" element={<Pagenotfound />} />
//         <Route path="/dashboard" element={<PrivateRoute/>}>
      
//         <Route path="" element={<Dashboard />}/>
       
//        </Route>
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserFromLocalStorage } from './redux/authSlice';

import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Register from './pages/Auth/Register';
import Pagenotfound from './pages/Pagenotfound';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import PrivateAdminRoute from './components/AdimRoutes/Privateadmin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateProduct from './pages/Admin/CreateProduct';
import CreateCategory from './pages/Admin/CreateCategory';
import Users from './pages/Admin/Users';
import Orders from './pages/user/Orders';
import { Profile } from './pages/user/Profile';
import Products from './pages/Admin/Products';
import UpdateProduct from './pages/Admin/UpdateProduct';
import Categories from './pages/Categories';
import CategoryProduct from './pages/CategoryProduct';
import CartPage from './pages/CartPage';
 // Ensure Header is included

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem('authData'));
    if (authData) {
      dispatch(loadUserFromLocalStorage(authData));
    }
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
       {/* Ensure Header is rendered */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        {!isAuthenticated && <Route path="/register" element={<Register />} />}
        {!isAuthenticated && <Route path="/login" element={<Login />} />}
        
        <Route path="/dashboard" element={<PrivateAdminRoute />}>
        
        <Route path="admin/create-product" element={<CreateProduct />} />
        <Route path="admin/products" element={<Products />} />
        <Route path="admin/product/:slug" element={<UpdateProduct />} />
        <Route path="admin/create-category" element={<CreateCategory />} />
        <Route path="admin/create-users" element={<Users />} />
          <Route path="admin" element={<AdminDashboard />} />
      
        </Route>
        <Route path="/dashboard" element={<PrivateRoute />}>
        
          
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
      
        </Route>
        
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
