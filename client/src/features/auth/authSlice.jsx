import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://blog-website-d8oe.onrender.com/api';

// Register User
export const registerUser = createAsyncThunk('auth/register', async (userData) => {
  const res = await axios.post(`${API_URL}/register`, userData);
  return res.data;
});

// Login User
export const loginUser = createAsyncThunk('auth/login', async (userData, { rejectWithValue }) => {
  try {
    const res = await axios.post(`${API_URL}/login`, userData);
    return res.data;
  } catch (error) {
    // Check for the specific error message from the server (e.g., wrong credentials)
    return rejectWithValue(error.response.data.message || 'Please check your userId or password');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: localStorage.getItem('token') || null,
    status: 'idle',
    error: null, // To store error message
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      // Registration successful
      .addCase(registerUser.fulfilled, (state, action) => {
        alert('Registered Successfully! Please login.');
      })
      // Login successful
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
        state.error = null; // Reset error on successful login
      })
      // Login failed
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload; // Set the error message here
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
