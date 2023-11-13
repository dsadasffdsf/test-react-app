import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchProductParams = createAsyncThunk('products/fetchProductParams', async (productId) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/products`);
    const data = await response.data;
    return { data };
  } catch (error: any) {
    return { error: error.message };
  }
});
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    productParams: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductParams.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductParams.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.productParams = action.payload.data; // Здесь action.payload содержит { data } из payloadCreator
      })
      .addCase(fetchProductParams.rejected, (state, action:any) => {
        state.status = 'failed';
        state.error = action.payload.error; // Здесь action.payload содержит { error } из payloadCreator
      });
  },
});
