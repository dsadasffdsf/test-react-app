import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/interface';




const initialState:Product[] = [
  {
    id: 1,
    name: 'Товар 1',
    price: 10.99,
    description: 'Описание товара 1',
  },
  {
    id: 2,
    name: 'Товар 2',
    price: 19.99,
    description: 'Описание товара 2',
  },
];

export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = productSlice.actions;

export default productSlice.reducer;
