import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, {
  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.isAuthenticated = true;
    state.loading = false;
    state.user = action.payload;
  },
  LoadUserFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});

// type safe code
// import { createReducer, createAction } from '@reduxjs/toolkit';

// // Define initial state
// const initialState = {
//   isAuthenticated: false,
//   loading: false,
//   user: null,
//   error: null,
// };

// // Define action types
// const loadUserRequest = createAction('LoadUserRequest');
// const loadUserSuccess = createAction('LoadUserSuccess');
// const loadUserFail = createAction('LoadUserFail');
// const clearErrors = createAction('clearErrors');

// // Use builder callback notation in createReducer
// export const userReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(loadUserRequest, (state) => {
//       state.loading = true;
//     })
//     .addCase(loadUserSuccess, (state, action) => {
//       state.isAuthenticated = true;
//       state.loading = false;
//       state.user = action.payload;
//     })
//     .addCase(loadUserFail, (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//       state.isAuthenticated = false;
//     })
//     .addCase(clearErrors, (state) => {
//       state.error = null;
//     });
// });

