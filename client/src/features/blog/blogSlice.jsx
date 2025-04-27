import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Fetch Blogs
export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async (token) => {
  const res = await axios.get(`${API_URL}/blogs`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
});

// Create Blog
export const createBlog = createAsyncThunk('blogs/createBlog', async ({ blogData, token }) => {
  const res = await axios.post(`${API_URL}/blogs`, blogData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.newBlog;
});

const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.blogs.push(action.payload);
      });
  },
});

export default blogSlice.reducer;
