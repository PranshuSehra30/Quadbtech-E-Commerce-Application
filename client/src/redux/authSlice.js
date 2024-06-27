// // import { createSlice } from '@reduxjs/toolkit';

// // const initialState = {
// //   isAuthenticated: false,
// //   user: null,
// //   token: null,
// // };

// // const authSlice = createSlice({
// //   name: 'auth',
// //   initialState,
// //   reducers: {
// //     login: (state, action) => {
// //       state.isAuthenticated = true;
// //       state.user = action.payload.user;
// //       state.token = action.payload.token;
// //     },
// //     logout: (state) => {
// //       state.isAuthenticated = false;
// //       state.user = null;
// //       state.token = null;
// //       localStorage.removeItem('authData'); 
// //     },
// //     loadUserFromLocalStorage: (state, action) => {
// //       state.isAuthenticated = action.payload.isAuthenticated;
// //       state.user = action.payload.user;
// //       state.token = action.payload.token;
// //     },
// //     setAuth: (state, action) => {
// //       state.isAuthenticated = action.payload.isAuthenticated;
// //       state.token = action.payload.token;
// //     },
// //   },
// // });

// // export const { login, logout, loadUserFromLocalStorage, setAuth } = authSlice.actions;
// // export default authSlice.reducer;
// import { createSlice } from '@reduxjs/toolkit';

// // Initial State
// const initialState = {
//   isAuthenticated: false,
//   user: null,
//   token: null,
// };

// // Auth Slice
// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       state.isAuthenticated = true;
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       localStorage.setItem('authData', JSON.stringify(state));
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.user = null;
//       state.token = null;
//       localStorage.removeItem('authData');
//     },
//     loadUserFromLocalStorage: (state, action) => {
//       state.isAuthenticated = action.payload.isAuthenticated;
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//     },
//     setAuth: (state, action) => {
//       state.isAuthenticated = action.payload.isAuthenticated;
//       state.token = action.payload.token;
//       localStorage.setItem('authData', JSON.stringify(state));
//     },
//   },
// });

// // Export Actions and Reducer
// export const { login, logout, loadUserFromLocalStorage, setAuth } = authSlice.actions;
// export default authSlice.reducer;

// // Helper Function to Load Auth State from Local Storage
// export const loadAuthFromLocalStorage = () => {
//   const authData = localStorage.getItem('authData');
//   if (authData) {
//     return JSON.parse(authData);
//   }
//   return initialState;
// };
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('authData', JSON.stringify(state));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem('authData');
    },
    loadUserFromLocalStorage: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setAuth: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.token = action.payload.token;
      localStorage.setItem('authData', JSON.stringify(state));
    },
  },
});

export const { login, logout, loadUserFromLocalStorage, setAuth } = authSlice.actions;
export default authSlice.reducer;

// Helper Function to Load Auth State from Local Storage
export const loadAuthFromLocalStorage = () => {
  const authData = localStorage.getItem('authData');
  if (authData) {
    return JSON.parse(authData);
  }
  return initialState;
};
