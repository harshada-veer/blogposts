import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('blogs/fetchPosts', async () => {
  const res = await axios.get('https://dummyjson.com/posts');
  return res.data.posts;
});

const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    posts: [],
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      });
  },
});

export default blogSlice.reducer;
