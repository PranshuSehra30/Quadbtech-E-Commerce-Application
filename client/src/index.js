// src/index.js
import React from "react";
//import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { CartProvider } from "./context/cart";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import 'antd/dist/reset.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { loadUserFromLocalStorage } from './redux/authSlice';
import { AuthProvider } from "./context/auth1";
import { SearchProvider } from "./context/Search";

// Load user from local storage if present
const authData = JSON.parse(localStorage.getItem('authData'));
if (authData) {
  store.dispatch(loadUserFromLocalStorage({
    isAuthenticated: true,
    user: authData.user,
    token: authData.token,
  }));
}

const root = createRoot(document.getElementById("root")); // Create a root using createRoot

root.render(
  <AuthProvider>
    <SearchProvider>
    <Provider store={store}>
      <CartProvider>

      
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </CartProvider>
    </Provider>
    </SearchProvider>
     </AuthProvider>

   
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
