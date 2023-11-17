import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppState, ProductsProps } from '@/types/interface';
import { useDispatch } from 'react-redux';
import { store } from '../store';
interface FetchProductIdPayload {
  data: any; // Замените any на реальный тип данных, который возвращает сервер
}

export const fetchProductId = createAsyncThunk<
  FetchProductIdPayload,
  string | string[] | undefined
>('productApiSlice/fetchProductId', async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/products/${id}`);
    const data = await response.data;
    console.log('Data from fetchProductId:', data);
    return { data };
  } catch (error) {
    console.error('Error in fetchProductId:', error);
    throw error;
  }
});

export const fetchProduct = createAsyncThunk('productApiSlice/fetchProduct', async () => {
  const response = await axios.get(`http://localhost:3000/api/products`);
  const data = await response.data;
  const product = data.payload.data;
  console.log('---------------------------------------------------');
  console.log(data);

  return { data };
});

const initialState: AppState = {
  products: [],
  status: 'idle',
  error: null,
};
const productsApi = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle',
    error: null,
  } as AppState,
  reducers: {},
  // extraReducers: (builder) => {
  //   // Add reducers for additional action types here, and handle loading state as needed
  //   builder.addCase(fetchProduct.fulfilled, (state, {payload}) => {
  //     // Add user to the state array
  //     state.products = payload;
  //   });
  // },
});

export const {} = productsApi.actions;
export default productsApi.reducer;
